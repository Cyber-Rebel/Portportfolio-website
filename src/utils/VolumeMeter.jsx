import React, { useEffect, useRef } from 'react';

const VolumeMeter = () => {
  const needleRef = useRef(null);
  const animationFrameRef = useRef();
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);

  useEffect(() => {
    const initAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioContext.createAnalyser();
        
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);
        
        analyser.fftSize = 512;
        audioContextRef.current = audioContext;
        analyserRef.current = analyser;

        processAudio();
      } catch (error) {
        console.error('Error accessing microphone:', error);
      }
    };

    const processAudio = () => {
      const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
      
      const updateMeter = () => {
        if (!analyserRef.current) return;

        analyserRef.current.getByteFrequencyData(dataArray);
        const volume = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
        const normalized = Math.min(volume / 128, 1);
        const angle = normalized * 180 - 90;

        if (needleRef.current) {
          needleRef.current.style.transform = `rotate(${angle}deg)`;
        }

        animationFrameRef.current = requestAnimationFrame(updateMeter);
      };

      animationFrameRef.current = requestAnimationFrame(updateMeter);
    };

    initAudio();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <div style={styles.meterContainer}>
      <div style={styles.meter}>
        <p className='text-white  absolute top-[80%] left-2  '> 0 </p>
        <p className='text-white  '> 90 </p>

        <div ref={needleRef} style={styles.needle} />
        <p className='text-white  absolute top-[80%] right-2  '> 180 </p>

      </div>

    </div>
  );
};

const styles = {
  meterContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  meter: {
    width: '200px',
    height: '100px',
    position: 'relative',
    border: '10px solid cyan',
    borderBottom: 'none',
    borderRadius: '100px 100px 0 0',
    overflow: 'hidden'
  },
  needle: {
    width: '4px',
    height: '80px',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transformOrigin: 'bottom',
    transform: 'rotate(-90deg)',
    transition: 'transform 0.1s linear'
  }
};

export default VolumeMeter;
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import BlurText from "../utils/Blur.jsx";
import video from "../assets/video.mp4";
import videot from "../assets/videot.mp4";
import videoh from "../assets/videoh.mp4";
import VolumeMeter from "../utils/VolumeMeter.jsx";
import NainTere from "../assets/Nain.mp3";
import { a } from "@react-spring/web";

const Home = () => {
    const videoRefs = useRef([]); // Multiple video refs
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isDownloading, setIsDownloading] = useState(false); // Added state

    const handleDownload = () => {
        console.log("Downloading...");
        setIsDownloading(true);
        setTimeout(() => setIsDownloading(false), 3000); // Reset after 3s
    };

    // Control Video Speed
    useEffect(() => {
        videoRefs.current.forEach((vid) => {
            if (vid) vid.playbackRate = 4;
        });
    }, []);

    // Update Audio Time
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => {
            setCurrentTime(audio.currentTime);
            setDuration(audio.duration);
        };

        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("loadedmetadata", updateTime);

        return () => {
            audio.removeEventListener("timeupdate", updateTime);
            audio.removeEventListener("loadedmetadata", updateTime);
        };
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="w-full">
            <Navbar />
            <div className="flex text-center p-4 w-full justify-between items-center relative">
                <BlurText
                    text="I Am Nilesh Asha Patil !!"
                    delay={150}
                    animateBy="words"
                    direction="left"
                    className="text-cyan-50 mx-4 py-12 text-6xl font-serif"
                />
                <div>
                    <VolumeMeter />
                    <audio ref={audioRef} src={NainTere}></audio>
                    <div className="w-fit absolute top-[69%] right-14 rounded-lg text-white mx-9">
                        <button onClick={togglePlay} className="text-4xl">
                            {isPlaying ? "🥁" : "📀"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Videos */}
            <div>
                <p className="text-center text-4xl text-white italic">
                    Code Our Self 🤍
                </p>
                <div className="flex justify-center gap-7 items-center mt-11">
                    {[video, videot, videoh].map((vid, index) => (
                        <video
                            key={index}
                            ref={(el) => (videoRefs.current[index] = el)}
                            className="w-[30%]"
                            loop
                            autoPlay
                            playsInline
                            muted
                            src={vid}
                        ></video>
                    ))}
                </div>
            </div>

            {/* Download Resume Button */}
            <div className="flex items-center justify-center m-20">
                <a
                    href="https://drive.google.com/file/d/1TppvuoogheptDQMECjO9tRX3LjgtUZgs/view?usp=sharing"
                    target="_blank"
                    
                >
                    <button
                        onClick={handleDownload}
                        onMouseEnter={() => console.log("Hovered")}
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                        <span
                            className={`relative px-28 py-2.5 transition-all ease-in duration-75 rounded-md ${
                                isDownloading
                                    ? " text-white animate-pulse"
                                    : "bg-white dark:bg-gray-900 group-hover:bg-transparent group-hover:dark:bg-transparent"
                            }`}
                        >
                            {isDownloading ? "Downloading..." : "Download Resume"}
                        </span>
                    </button>
                </a>
            </div>
        </div>
    );
};

// Format time in mm:ss
const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
};

export default Home;

import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'

import Apps from './Workablespace/App'
const App = () => {
  
  const lenisRef = useRef()
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time)
    }
  
    const rafId = requestAnimationFrame(update)
  
    return () => cancelAnimationFrame(rafId)
  }, [])





  return (
<div>
  <ReactLenis root />
  <Apps/>
</div>
  )
}

export default App
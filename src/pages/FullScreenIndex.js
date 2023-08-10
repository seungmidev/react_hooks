import React from 'react'
import useFullScreen from '../hooks/useFullScreen';

export default function FullScreenIndex() {
  const onFullSc = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  }

  const { element, triggerFull, exitFull } = useFullScreen(onFullSc);

  return (
    <div>
      <div>
      <img ref={element} src="//images.samsung.com/kdp/event/sec/2023/0727_galaxy_watch6/launching/buying_slide/gw6_thumb_preview_pc.png" alt="" />
        <button onClick={exitFull}>Exit full screen</button>
      </div>      
      <button onClick={triggerFull}>Make full screen</button>
    </div>
  )
}

import React from 'react'
import useScroll from '../hooks/useScroll';

export default function ScrollIndex() {
  const { y } = useScroll();

  return (
    <div style={{height: "1000vh"}}>
      <h1 style={{position: "fixed", color: y > 100 ? "red" : "blue"}}> Hi</h1>
    </div>
  )
}

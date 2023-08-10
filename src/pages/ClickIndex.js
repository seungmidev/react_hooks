import React from 'react'
import useClick from '../hooks/useClick';

export default function ClickIndex() {
  const sayHello  = () => console.log("say Hello");
  const title = useClick(sayHello);

  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  )
}

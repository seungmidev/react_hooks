import React from 'react'
import useBeforeLeave from '../hooks/useBeforeLeave';

export default function BeforeLeaveIndex() {
  const begForLife = () => console.log("Pls don't leave");
  useBeforeLeave(begForLife);

  return (
    <div>useBeforeLeave</div>
  )
}

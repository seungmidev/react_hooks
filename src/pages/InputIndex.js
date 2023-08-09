import React from 'react'
import useInput from '../hooks/useInput';

export default function InputIndex() {
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Ms.", maxLen);

  return (
    <div>
      <h1>Hello</h1>
      <input type="text" placeholder="name" {...name} />
    </div>
  )
}


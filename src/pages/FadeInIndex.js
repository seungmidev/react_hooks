import React from 'react'
import useFadeIn from '../hooks/useFadeIn';

export default function FadeInIndex() {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 7);

  return (
    <div>
      <h1 {...fadeInH1}>Fade In</h1>
      <p {...fadeInP}>use fade in content</p>
    </div>
  )
}

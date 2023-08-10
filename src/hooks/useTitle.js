import { useEffect, useState } from 'react'

export default function useTitle(initialTitle) {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }

  useEffect(updateTitle, [title]);
  
  return setTitle;
}

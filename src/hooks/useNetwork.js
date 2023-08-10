import { useEffect, useState } from 'react'

export default function useNetwork(onChange) {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if(typeof onChange === "function") {
      setStatus(navigator.onLine);
    }
    setStatus(navigator.onLine);
  }

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
}

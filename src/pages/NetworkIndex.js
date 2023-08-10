import React from 'react'
import useNetwork from '../hooks/useNetwork';

export default function NetworkIndex() {
  const handleNetworkChange = (online) => {
    console.log(online ? "onLine" : "offLine");
  }
  const onLine = useNetwork(handleNetworkChange);

  return (
    <div>{onLine ? "onLine" : "offLine"}</div>
  )
}

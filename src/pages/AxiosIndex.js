import React from 'react'
import useAxios from '../hooks/useAxios'

export default function AxiosIndex() {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const { loading, data, refetch } = useAxios({url: `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet&maxResults=25&chart=mostPopular`});
  console.log('REACT_APP_YOUTUBE_API_KEY', API_KEY); 

  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  )
}

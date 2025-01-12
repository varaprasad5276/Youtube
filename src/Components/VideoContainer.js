import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../Utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const VideoContainer = () => {
const [videos,setVideos]=useState([]);
  useEffect(()=>{
    getVideos()
  },[])

  const getVideos= async()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API);
    const json=await data.json();
    // console.log(json);
    setVideos(json.items)
  }
  return (
    <div className='flex flex-wrap '>
      {/* <VideoCard info={videos[1]}/> */}
      {videos.map((video,index)=>(
      <Link to={"/watch?v="+video.id} key={index}><VideoCard key={video.id} info={video}/></Link>))}
    </div>
  )
}

export default VideoContainer;
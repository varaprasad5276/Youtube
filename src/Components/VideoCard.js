import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='m-2 p-2 w-72   cursor-pointer text-wrap hover:bg-gray-200'>
        <img alt="thumbnails" src={thumbnails.medium.url} className='rounded-lg hover:rounded-none'/>
        <ul>
            <li className='font-bold pt-2 text-sm'>{title}</li>
            <li className='text-xs'>{channelTitle}</li>
            <li className='text-xs'>{statistics.viewCount} views </li>
        </ul>
    </div>
  )
}

export default VideoCard
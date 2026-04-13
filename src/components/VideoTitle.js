import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%]  px-24 absolute bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold w-1/5 text-white'>{title}</h1>
        <p className='py-6 text-sm w-1/3 text-white'>{overview}</p>
        <div  >
            <button className='bg-white text-black p-3 px-12 text-xl rounded-lg hover:opacity-85'>▶️ Play</button>
            <button className='mx-2 bg-gray-500 text-white p-3 px-12 text-xl bg-opacity-50 rounded-lg'> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
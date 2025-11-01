import React from 'react'

function SongContainer() {
  return (
    <div className='flex h-full min-w-45 items-center s flex-col hover:bg-[#2c2c2c] hover:opacity-60 rounded-2xl gap-2 py-2 '>
        <img src="https://www.shutterstock.com/image-vector/song-word-design-illustration-treble-600w-2274034085.jpg" alt="" className='h-30 w-30 rounded-xl' />
        <h1 className='text-white font-bold'>title</h1>
        <p className='text-white'>Vol. 1</p>
        <p className='text-white'>Mann Panu </p>
    </div>
  )
}

export default SongContainer
import React from 'react'
import TrendingSong from './TrendingSong'
import Song from '../pages/Song'

function HeroRightBox() {
  return (
    <div className='h-auto w-full rounded-2xl  overflow-auto no-scrollbar '> 
      <Song />
    </div>
  )
}

export default HeroRightBox
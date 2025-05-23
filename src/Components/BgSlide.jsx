import React from 'react'
import { BG_Image } from '../utils/constant'

const BgSlide = () => {
  return (
    <div className='my-4 md:mx-16 flex justify-center '>
        <img 
            className='rounded-xl '
            src={BG_Image} alt="bg-logo" />
    </div>
  )
}

export default BgSlide
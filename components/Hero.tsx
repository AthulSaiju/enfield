import Vertical from '../common/vertical'
import React from 'react'
import Container from './Container'

const Hero = () => {
  return (
    <div className='main-container  relative'>
      <div className=' mt-[7px] ml-[2px]'>

        <Vertical/>

      </div>


      <Container/>




      <div className='absolute bottom-[3px] left-[3px]'>

        <Vertical/>

      </div>
    
    </div>
  )
}

export default Hero
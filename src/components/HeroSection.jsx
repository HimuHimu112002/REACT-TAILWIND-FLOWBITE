import { Carousel } from 'flowbite-react'
import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="image/banner7.jpg" alt="banner1" />
          <img src="image/banner2.png" alt="banner2" />
          <img src="image/banner8.jpg" alt="banner8" />
          <img src="image/banner4.jpg" alt="banner4" />
          <img src="image/banner5.jpg" alt="banner5" />
        </Carousel>
      </div>
    </div>
  )
}

export default HeroSection
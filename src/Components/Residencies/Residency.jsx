import React from 'react'
import {Swiper, SwiperSlide,useSwiper} from 'swiper/react'
import 'swiper/css'
import './Residency.css'
import data from '../../utils/sliders.json'
import { color } from 'framer-motion'
import { sliderSettings } from '../../utils/common'
const Residency = () => {
  return (
    <section className='r-wrapper'>
        <div className='padddings innerWidth r-container '>
            <div className='r-head flexColStart'>
            <span className='orangeText'> Best Choices </span>
            <span className='primaryText'> Popular Residencies </span>
            </div>

            <Swiper {... sliderSettings}>
                {/* destructruing the slider settings into parent component */}
                {data.map((card, i) => (
                    <SwiperSlide key={i}>
                        <div className=' flexColStart r-card'>
                        <img src={card.image} alt="home"></img>
                        <span className='secondaryText r-price'>
                            <span style={{color:"orange"}}>$</span>
                            <span>{card.price}</span>
                            </span> 

                            <span className='primaryText'>{card.name}</span>
                            <span className='secodaryText'>{card.detail}</span>

                        </div>
                    </SwiperSlide>


                ))
            }
            </Swiper>
    </div>   
     </section>
  )
}

export default Residency
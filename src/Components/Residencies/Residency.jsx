import React from 'react'
import {Swiper, SwiperComponent,SwiperSlide,useSwiper} from 'swiper/react'
import './Residency.css'
import 'swiper/css'
import data from '../../utils/sliders.json'
import { color } from 'framer-motion'

const Residency = () => {
  return (
    <section className='r-wrapper'>
        <div className='padddings innerWidth r-container '>
            <div className='r-head flexColStart'>
            <span className='orangeText'> Best Choices </span>
            <span className='primaryText'> Popular Residencies </span>
            </div>

            <Swiper>
                {data.map((card, i) => (
                    <SwiperSlide key={i}>
                        <div className='r-card'>
                        <img src={card.image} alt="home"></img>
                        <span className='secondaryText r-price'>
                            <span style={{color:"orange"}}>$</span>
                            <span>{card.price}</span>
                            </span> 
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
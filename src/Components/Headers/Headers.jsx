import React from 'react'
import './Headers.css'

function Headers() {
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth'>
            <img src='download.jpeg' alt='logo' width={100}>
            </img>
            <div className=' flexCenter h-menu'> 
                <a href=''>Residencies</a>
                <a href="">Our Values</a>  
                <a href="">Contact Us</a>                  
                <a href="">Get Started</a> 
                <button className='button'>
                  <a href=''>Contact</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Headers
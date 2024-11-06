import React from 'react'

function Headers() {
  return (
    <section className='h-wrapper'>
        <div className='h-container'>
            <img src='download.jpeg' alt='logo' width={100}>
            </img>
            <div className='h-menu'> 
                <a href=""> Buy</a>  
                <a href=""> Rent</a> 
                <a href=""> Sell</a> 
                <a href="">Contact Us</a>                  
                <a href="">Get Started</a> 
            </div>
        </div>
    </section>
  )
}

export default Headers
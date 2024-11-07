import React from 'react';
import './Hero.css';
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';

function Hero() {
  return (
    <section className='hero-wrapper'>
        <div className='paddings innewrWidth flexCenter hero-container'> 
            <div className=' flexColStart hero-left'>
                <div className='hero-title'>
                    <div className='orange-circle'/>
                    <h1>
                        Discover<br/> Most Suitable <br/>Property
                    </h1>
                </div>
                <div className='flexColStart hero-des'>
                    <span className=''>Find a variety of properties that suits you easily</span>
                    <span>Forget all difficulties in finding a residence for uou</span>
                </div>
                <div className='flexCenter Search-Bar'>
                    <HiLocationMarker color='var(--blue)' size={25}/>
                    <input type='text'/>
                    <button className='button'>
                        SearchBar
                    </button>
                </div>
                <div className='flexCenter stats'>
                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={8000} end={9000} duration={4}/>
                            <span>++</span>
                        </span>
                        <span className='secondaryText'>Premimum Properties</span>
                        </div>

                        <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span>++</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                        </div>

                        <div className='flexColCenter stat'>
                        <span>
                            <CountUp  end={4}/>
                            <span>++</span>
                        </span>
                        <span className='secondaryText'>Award Winnings</span>
                    </div>
                </div>
            </div>
            
            <div className='flexCenter hero-right'>
<div className='image-container'>
    <img src="./images.jpg" alt=""/>
</div>
            </div>
        </div>
    </section>


)
}

export default Hero
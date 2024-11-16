import React from 'react'
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'

import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md';
import './Values.css' 

const Values = () => {
  return (
    <section className='v-wrapper'>
      <div className='paddings innerWidth flexCenter v-container'>
        <div className='left'>
          <div className='image-container'>
            <img src="./values.jpeg" alt="home"/>
          </div>
        </div>
        <div className='flexColStart v-right'>
          <span className='orangeText'>Our Values</span>
          <span className='primaryText'>Value We Give to You</span>
          <span className='secondaryText'> We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better</span>
        </div>
      </div>
    </section>
  )
}

export default Values
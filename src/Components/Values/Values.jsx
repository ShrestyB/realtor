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
import data from '../../utils/accordion'

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
            <Accordion 
            allowMultipleExpanded={false}
            preExpanded={[0]}>
              {/*Accordions push down content to make room for themselves, unlike dropdowns which lay over other content.   */}

              {
                data.map((item, index) => {
                  return (
                    <AccordionItem className='accordionItem' key={index} uuid={index}>
                      <AccordionItemHeading>
                        <AccordionItemButton className='flexCenter accordionButton'>
                          <div className="flexCenter icon">{item.icon}</div>
                          <span className="primaryText">{item.heading}</span>
                          <div className="flexCenter icon">
                            <MdOutlineArrowDropDown size={20}/>
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="secondaryText">{item.detail}</div>
                      </AccordionItemPanel>
                    </AccordionItem>
                  );
                } )}
            </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Values
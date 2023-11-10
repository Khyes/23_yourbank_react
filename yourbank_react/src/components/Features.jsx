import React from 'react';
import { features } from '../constants';
import { arrow } from '../assets';
import './features.css';

const Features = () => {
  return (
    <section className='app__features'>
      <h1>Our <span>Features</span></h1>
      <p>Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience</p>
      <div className='app__features-content'> 
        <div className='app__features-content_choices'>
            <button type='button' className='active'>Financial Banking</button>
            <button type='button'>Online Tools</button>
            <button type='button'>Customer Support</button>
        </div>
        {features.map((feature, id) => (
          <div className="app__features-content_item">
            <img src={arrow} alt={id}/>
            <h3>{feature.title}</h3>
            <p>{feature.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
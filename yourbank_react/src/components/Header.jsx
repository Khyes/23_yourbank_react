import React from 'react';

import { header_img, abstract1, check_icon } from '../assets';
import { Button } from '../components';

import './header.css'


const Header = () => {
  return (
    <section id='home' className='app__header'>
      <img src={abstract1} alt="abstract" className='background_img' />
      <div className='app__header-info'>
        <div className='app__header-info_aside'>
          <img src={check_icon} alt="check icon" />
          <p>No LLC Required, No Credit Check.</p>
        </div>
        <h1>
          Welcome to YourBank
          Empowering Your <span>Financial Journey</span>
        </h1>
        <p>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
        <Button content="Open Account"/>
      </div>

      <div className='app__header-img'>
        <img src={header_img} alt="header image" />
      </div>
    </section>
  )
}

export default Header
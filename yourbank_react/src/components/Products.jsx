import React, { useState, } from 'react';
import { Button } from '../components';
import { products, productsB } from '../constants';

import './product.css'

const Products = () => {
  const [activeButton, setActiveButton] = useState("For Individuals");

  const handleButtonClick = (content) => {
    setActiveButton(content);
  };

  const handleDivClick = (event) => {
    // Check if the clicked element is a button
    if (event.target.tagName === 'BUTTON') {
      const content = event.target.textContent;
      handleButtonClick(content);
    }
  };

  const activeProducts = activeButton === 'For Individuals' ? products : productsB;

  return (
    <section id='products' className='app__products'>
      <h1>Our <span>Products</span></h1>
      <div className='app__products-top'>
        <p>Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</p>
        <div className='app__products-top_choices' onClick={handleDivClick}>
          <Button content="For Individuals" style={activeButton === 'For Enterprise' ? 'btn-black' : ''}/>
          <Button content="For Enterprise" style={activeButton === 'For Individuals' ? 'btn-black' : ''}/>
        </div>
      </div>

      <div className='app__products-list'>
        {activeProducts.map((product, id) => (
            <div key={id} className='app__products-list-item'>

              <div className='app__products-list_icon'>
                <img src={product.icon} alt="icon"/>
              </div>

              <h2>{product.title}</h2>
              <p>{product.content}</p>
            </div>
            ))}
      </div>
    </section>
  )
}

export default Products
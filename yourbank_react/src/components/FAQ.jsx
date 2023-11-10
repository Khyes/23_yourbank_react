import React from 'react';
import './faq.css';
import { faqs } from '../constants';

import { HiChevronDown } from 'react-icons/hi2';

const FAQ = () => {
  return (
    <section className='app__faq'>
      <h1><span>Frequently</span> Asked Questions</h1>
      <p>Still you have any questions? Contact our Team via support@yourbank.com</p>
      <div className='app__faq-content'>
        <div className='app__faq-grid'>
        {faqs.map((faq, id) => (
          <div className="app__faq-content_item">
            <h3>{faq.title}</h3>
            <div className='divider'></div>
            <p>{faq.content}</p>
          </div>
        ))}
        </div>
        <div className='overlay'></div>
        <button type='button'>Load All FAQ's <HiChevronDown strokeWidth={2} /></button>
      </div>
    </section>
  )
}

export default FAQ
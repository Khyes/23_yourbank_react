import React from 'react';
import { useCases, useCasesB, percentages, percentagesB } from '../constants';

import { abstract1, abstract3, abstract4 } from '../assets';

import './usecases.css'

const UseCases = () => {
  return (
    <section className='app__usecase'>  
      <h1><span>Use Cases</span></h1>  
      <p>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
      
      <div className='app__usecase-content'>
        <div className='app__usecase-content_top'>

          <div className='app__usecase-cards'>
            <img src={abstract3} alt="" className='bg-image'/>
            <div className='app__usecase-cards-item'>
              {useCases.map((useCase, id) => (
                <div>
                  <img src={useCase.icon} alt={id}/>
                  <p>{useCase.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='app__usecase-percentages'>
              <h2>For Individuals</h2>
              <p>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
              <div className='percentages__items-container'>
              {percentages.map((percentage, id) => (
                <div>
                  <h3>{percentage.title}</h3>
                  <p>{percentage.content}</p>
                </div>
              ))}
              </div>
              <button type='button' className='black-button'>Learn More</button>
          </div>

        </div>


        <div className='app__usecase-content_bottom'>
        <div className='app__usecase-percentages'>
              <h2>For Business</h2>
              <p> For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them</p>
              <div className='percentages__items-container'>
              {percentagesB.map((percentageB, id) => (
                <div>
                  <h3>{percentageB.title}</h3>
                  <p>{percentageB.content}</p>
                </div>
              ))}
              </div>
              <button type='button' className='black-button'>Learn More</button>
          </div>

          <div className='app__usecase-cards'>
            <img src={abstract4} alt="" className='bg-image-bottom' />
            <div className='app__usecase-cards-item'>
              {useCasesB.map((useCaseB, id) => (
                <div>
                  <img src={useCaseB.icon} alt={id}/>
                  <p>{useCaseB.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default UseCases
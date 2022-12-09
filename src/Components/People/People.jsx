import React from 'react';
import Chicky from './Chicky';
import Prajwal from './Prajwal';
import Utkarsh from './Utkarsh';

const People = () => {
  return (
    <div className='people'>
        <h2>What people say about me</h2>
        <hr className='people-hr'/>
        <div className='people-content'>
        <Chicky />
        <Prajwal />
        <Utkarsh />
        </div>
        <div className='people-footer'>
            <p>View more testimonials</p>
            <div className="arrow">
                <div className="lineOne"></div>
                <div className="line"></div>
                <div className="lineTwo"></div>
            </div>
        </div>
    </div>
  )
}

export default People;
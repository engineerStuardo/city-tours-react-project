import React from 'react';

import './aboutItem.scss';

const AboutItem = ({ id, title, description, imgUrl }) => {
  return (
    <>
      {id !== 2 ? (
        <div className='about'>
          <div className='about-us'>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <img src={imgUrl} alt='about img' />
        </div>
      ) : (
        <div className='about'>
          <img src={imgUrl} alt='about img' />
          <div className='about-us'>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutItem;

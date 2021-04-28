import React from 'react';

import './about.scss';

import aboutImg from '../../images/about.jpg';
import teamTour from '../../images/team-tour.jpg';
import funTour from '../../images/fun-tour.jpeg';

const About = () => {
  return (
    <>
      <div className='about'>
        <div className='about-us'>
          <h2>about us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rem
            tempore rerum ut officiis suscipit labore minima totam inventore.
            Commodi rerum saepe quam veniam neque?
          </p>
        </div>
        <img src={aboutImg} alt='about img' />
      </div>
      <div className='about'>
        <img src={teamTour} alt='about img' />
        <div className='about-us'>
          <h2>tour team</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rem
            tempore rerum ut officiis suscipit labore minima totam inventore.
            Commodi rerum saepe quam veniam neque?
          </p>
        </div>
      </div>
      <div className='about'>
        <div className='about-us'>
          <h2>Funny tours</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rem
            tempore rerum ut officiis suscipit labore minima totam inventore.
            Commodi rerum saepe quam veniam neque?
          </p>
        </div>
        <img src={funTour} alt='about img' />
      </div>
    </>
  );
};

export default About;

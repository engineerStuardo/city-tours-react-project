import React from 'react';

import './about.scss';

import AboutItem from '../AboutItem/AboutItem';

import { aboutItems } from '../../tourData';

const About = () => {
  return (
    <>
      {aboutItems.map(item => (
        <AboutItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default About;

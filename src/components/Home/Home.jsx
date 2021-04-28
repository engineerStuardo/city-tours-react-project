import React from 'react';

import './home.scss';

import logo from '../../logo.svg';
import imgBanner from '../../city-banner.jpg';

const Home = () => {
  return (
    <div className='banner-container'>
      <img src={imgBanner} alt='city banner' className='img-banner' />
      <div className='banner'>
        <img src={logo} alt='cirty tours company' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          eligendi rem mollitia libero velit ratione quos dolor, quae enim
          laudantium magni repellat, sit ullam rerum omnis vel autem atque vero
          facere quod dolorum harum labore iure? Laboriosam, expedita maiores
          tempore praesentium cupiditate repellat eos repellendus asperiores
          architecto numquam voluptatibus assumenda ipsam iusto ratione iste.
          Culpa fugit doloribus, soluta cumque omnis ratione, ullam est ipsum
          eveniet beatae consectetur tempora voluptatum et debitis magni
          architecto veritatis repudiandae.
        </p>
      </div>
    </div>
  );
};

export default Home;

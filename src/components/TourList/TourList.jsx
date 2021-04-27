import React, { useState } from 'react';

import './tourList.scss';

import Tour from '../Tour/Tour';

import { tourData } from '../../tourData';

const TourList = () => {
  const [tours, setTours] = useState(tourData);

  const removeTour = id => {
    console.log(id);
  };

  return (
    <section className='tour-list'>
      {tours.map(tour => (
        <Tour key={tour.id} removeTour={removeTour} {...tour} />
      ))}
    </section>
  );
};

export default TourList;

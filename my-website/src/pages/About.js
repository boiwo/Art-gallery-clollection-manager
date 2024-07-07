

import React from 'react';


const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-header">About Us</h2>
      <div className="about-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
          justo sed ligula semper sagittis.
        </p>
        <p>
          Integer auctor sapien ac dui luctus, id posuere elit ultricies.
          Donec vel eros sit amet nulla varius posuere. Sed vestibulum
          vestibulum nisi in finibus.
        </p>
        <img
          src="https://via.placeholder.com/800x600"
          alt="About Us"
          className="about-image"
        />
        <p>
          Phasellus vel diam ultrices, vestibulum nunc sit amet, scelerisque
          magna. Cras sit amet ex est.
        </p>
      </div>
    </div>
  );
};

export default About;

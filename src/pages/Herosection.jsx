import React from 'react';
import '../styles/hero.css';

const Herosection = () => {
    return (
        <div className="background-section">
      <div className="container">
        <div className="content">
          <div className="left-side">
            
          <div class="phone">
        <div class="button"></div>
        <div class="screen">
            <img class="inner-image" src="https://i.scdn.co/image/ab678e040000ed3aed58911aecc6dbc16949f40b"
                alt="Inner Image"/>
        </div>
    </div>
          </div>
          <div className="right-side">
            <h2>
Play millions of songs <br /> and podcasts, for free.</h2>
           <button className='butt'>GET SPOTIFY FREE</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Herosection;








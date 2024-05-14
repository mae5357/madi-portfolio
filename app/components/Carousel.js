

import { useState, useEffect } from 'react';
import './Carousel.css';

const taglines = [
    'transforming data into impactful solutions',
    'building pipelines for AI',
    'NLP Data Engineer',
  ];

// create carousel component that rotates smoothly after 3 seconds
function Carousel() {
    const [currentTagline, setCurrentTagline] = useState(0);
    const [fadeProp, setFadeProp] = useState({
      fade: 'fade-in'
    });
  
    useEffect(() => {
      const fadeOutTimeout = setTimeout(() => {
        setFadeProp({ fade: 'fade-out' });
      }, 5100);
  
      const fadeInTimeout = setTimeout(() => {
        setCurrentTagline((currentTagline + 1) % taglines.length);
        setFadeProp({ fade: 'fade-in' });
      }, 6000);
  
      return () => {
        clearTimeout(fadeOutTimeout);
        clearTimeout(fadeInTimeout);
      };
    }, [currentTagline]);
  
    return (
      <div className={`tagline ${fadeProp.fade}`}>
        {taglines[currentTagline]}
      </div>
    );
  }

export default Carousel;
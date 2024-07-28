import React, { useState, useEffect } from 'react';
import './slider.css';

const slides = [
  { id: 1, image: './images/banner1.jpeg', alt: 'Image 1' },
  { id: 2, image: './images/banner2.jpeg', alt: 'Image 2' },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 4000); // Cambia la duración del intervalo según tus necesidades

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

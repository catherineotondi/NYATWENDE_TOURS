import React, { useState } from "react";
import "./ImageCarousel.css"; // Custom CSS file for styling

const ImageCarousel = () => {
  const images = [
    "https://via.placeholder.com/1200x500?text=Image+1",
    "https://via.placeholder.com/1200x500?text=Image+2",
    "https://via.placeholder.com/1200x500?text=Image+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={goToPrevious}>
        ❮
      </button>
      <button className="carousel-button next" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

export default ImageCarousel;
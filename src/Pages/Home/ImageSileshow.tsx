import React, { useState } from 'react';
import './imageSlider.css'; // You can style the slideshow using CSS

// Add more properties as needed
interface ImageSlideshowProps {
  images: Anime[];
}

interface Anime {
  animeId: string;
  animeTitle: string;
  animeImg: string;
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow-container">
      <img src={images[currentIndex].animeImg} alt={images[currentIndex].animeTitle} className="slide" />
      <button onClick={prevSlide} className="prev-button">&#10094;</button>
      <button onClick={nextSlide} className="next-button">&#10095;</button>
    </div>
  );
};

export default ImageSlideshow;

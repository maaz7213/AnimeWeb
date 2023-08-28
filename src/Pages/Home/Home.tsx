import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import './imageSlider.css'; // You can style the slideshow using CSS


interface Anime {
  animeId: string;
  animeTitle: string;
  animeImg:string;
  // Add more properties as needed
}

export default function Home() {
  const [Result, setResult] = useState<Anime[]>([]);
  
  const GetData = () => {
    axios
      .get<Anime[]>('https://animeapi-py9q.vercel.app/popular')
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetData();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % Result.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + Result.length) % Result.length);
  };

  
  return (
    <div>
        {Result.length > 0 ? (
      <div className="slideshow-container">
        <img
          src={Result[currentIndex].animeImg}
          alt={Result[currentIndex].animeTitle}
          className="slide"
        />
        <button onClick={prevSlide} className="prev-button">
          &#10094;
        </button>
        <button onClick={nextSlide} className="next-button">
          &#10095;
        </button>
        <div className="dot-container">
        {Result.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      </div>
    ) : (
      <p  >Loading...</p>
    )}
    </div>


  );
}

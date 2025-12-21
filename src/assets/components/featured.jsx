import React, { useEffect, useState } from "react";
import "./featured.css";

const Featured = () => {
  const cars = [
    {
      name: "Porsche",
      info: "€72,000 • 2021 • 15.000 km",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    },
    {
      name: "Viper",
      info: "€45,000 • 2020 • 32.000 km",
      img: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    },
    {
      name: "Lotus",
      info: "€60,000 • 2005 • 25.000 km",
      img: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    },
    {
      name: "BMW M3",
      info: "€100,000 • 2020 • 25.000 km",
      img: "https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg",
    },
    {
      name: "Audi A5 Break S",
      info: "€50,000 • 2015 • 70.000 km",
      img: "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg",
    },
  ];

  const [index, setIndex] = useState(0);

  // auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % cars.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  return (
    <section className="featured">
      <h1>Favorite Cars</h1>

      <div className="featuredItem">
        <img
          src={cars[index].img}
          alt={cars[index].name}
          className="featuredImg"
        />

        <div className="featuredTitles">
          <h2>{cars[index].name}</h2>
          <p>{cars[index].info}</p>
        </div>

        {/* BUTOANE */}
        <button className="navBtn left" onClick={prevSlide}>‹</button>
        <button className="navBtn right" onClick={nextSlide}>›</button>
      </div>
    </section>
  );
};

export default Featured;

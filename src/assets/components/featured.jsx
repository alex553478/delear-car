import React, { useEffect } from 'react'
import './featured.css'

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
  const [selectedCar, setSelectedCar] = React.useState(cars[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000)
    return () => clearInterval(interval);
  }, []);
  const nextSlide = () => {
    setSelectedCar((prevCar) => {
      const curentIndex = cars.indexOf(prevCar);
      if (curentIndex === cars.length - 1) {
        return cars[0];
      } else {
        return cars[curentIndex + 1];

      }
    });
  }; const prevSlide = () => {
    setSelectedCar((prevCar) => {
      const curentIndex = cars.indexOf(prevCar);
      if (curentIndex === 0) {
        return cars[cars.length - 1];
      } else {
        return cars[curentIndex - 1];
      }
    });

  };

  return (
    <div className="featured">
      <h2>Listari Noi</h2>
      <p>Descopera cele mai noi masini de lux din aceasta </p>
      <div className="featured-content">
        <img src={selectedCar.img} alt={selectedCar.name} />
        <h2>{selectedCar.name}</h2>
        <p>{selectedCar.info}</p>
      </div>
      <div className="steps-wrapper">
        <h2 className="steps-title">Pași de urmat</h2>

        <div className="steps-container">

          <div className="step-card">
            <span className="step-number">01</span>
            <span className="step-icon">📄</span>
            <h3>Completezi formularul de rate</h3>
          </div>

          <div className="step-card">
            <span className="step-number">02</span>
            <span className="step-icon">🚗</span>
            <h3>Alegi mașina dorită</h3>
          </div>

          <div className="step-card">
            <span className="step-number">03</span>
            <span className="step-icon">✔️</span>
            <h3>Verificăm eligibilitatea</h3>
          </div>

          <div className="step-card">
            <span className="step-number">04</span>
            <span className="step-icon">📦</span>
            <h3>Livrăm gratuit</h3>
          </div>

        </div>
      </div>


    </div>
  );
}



export default Featured

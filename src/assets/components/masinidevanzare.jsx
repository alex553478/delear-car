import React from 'react'

const masinidevanzare = () => {
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
  return (
    <div className="masini-page">
      <h1>🚗 Mașini de vânzare</h1>

      <div className="masini-grid">
        {cars.map((car, index) => (
          <div className="masina-card" key={index}>
            <img src={car.img} alt={car.name} />
            <div className="masina-info">
              <h3>{car.name}</h3>
              <p>{car.info}</p>
              <button>Vezi detalii</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default masinidevanzare


import React from "react";
import "./masini.css";

const Masini = () => {
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

      img:"https://i.postimg.cc/J4zk9ksH/pexels-billingphotography-9695287.jpg",
      name: "Skoda Fabia",
      info: "$10,000 -2021 - 120.000 km",
      
    },
    {img:"https://i.postimg.cc/TwTwgzmK/pexels-mikebirdy-452099.jpg",
      name: "Bmw Seria 3",
      info: "$4,000 -2008 - 200.000 km",
    },
    {
      img:"https://i.postimg.cc/zGJ8dC3m/222305-4527987.webp",
      name: "Dacia Duster 1",
      info: "$5,000 - 2011 - 150.000 km 4x4"
    },
    {
      img:"https://i.postimg.cc/3RbkhL4K/car-photo-411691.jpg",
      name: "Ford Focus mk3",
      info: "$5,000 - 2011 - 190.000 km",
    },
    {
      img:"https://i.postimg.cc/m2VrCLyz/skoda-octavia-iii-scout.jpg",
      name: "Skoda Octavia III Scout",
      info: "$11,000 - 2016 - 200.000 km",

    },
    {
      img:"https://i.postimg.cc/nc83tZ8c/7b2653d1-12f1-40a5-92aa-23e0b33bfc0f-vw-sharan-2-0-tdi-dsg-bluemotion-technology-highline.jpg",
      name: "VW Sharan 2.0 TDI",
      info: "$5,000 - 2014 - 150.000 km",

    },
    {img:"https://i.postimg.cc/vHqDV8Q8/720x540.webp",
      name: "VW Golf 7 R line",
      info: "$24.000 - 2019 - 70.000 km"
    },
    {
      img:"https://i.postimg.cc/4N6kDBSv/b8a077ca-b717-4561-9ba7-3c365a8bd093-rule-mo-1600.jpg",
      name: "Honda Civic 1.8 vtec",
      info: "$4,570 - 2008 - 200.000 km",
    },
    {
      img:"https://i.postimg.cc/L50Y2mXW/Logan-driving-front-jpg-auto-format-cs-tinysrgb-fit-clip-ixlib-rb-1-1.jpg",
      name: "Renault Logan MCV 2.0 DCI 4X4",
      info: "$6,000 - 2012 - 100.000 km",
    },
    {
      img:"https://i.postimg.cc/RFMCbq9B/test-de-fi-62519.jpg",
      name: "Dacia Logan 2 Stepway",
      info: "$7,000 - 2015 - 200.000 km",
    },
    {
      img:"https://i.postimg.cc/gkvzdvJP/image-s-1440x0-q-100.jpg",
      name: "Dacia Sandero Stepway 1.5 Dci",
      info: "$11,000 - 2019 - 1000.000 km"
    },
    {
      img:"https://i.postimg.cc/TYP0vcQq/39b4d027-0b5d-45f0-b8b4-748e16ddc73a-rule-mo-1600.jpg",
      name: "Mazda 6",
      info: "$15,000 - 2015 - 200.000 km",
    }
    
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
  );
};

export default Masini;

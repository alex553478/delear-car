import React from "react";
import "./masini.css";
import Footer from "./footer";
import { Link } from "react-router-dom";

const Oferte = () => {
  const cars = [
    {
      img: "https://i.postimg.cc/fT03fCw9/image-s-1440x0-q-80.jpg",
      name: "Mitsubishi ASX 2.2 DI-D 4WD",
      info: "Preț vechi 8500 € → 7500 €",
    },
    {
      img: "https://i.postimg.cc/hjCRGsrj/image-s-1000x700.jpg",
      name: "Range Rover Evoque R-Dynamic",
      info: "Preț vechi 20000 € → 18000 €",
    },
    {
      img: "https://i.postimg.cc/vZXJhXJv/image-s-1000x700.jpg",
      name: "Subaru Forester 4x4 Euro 6",
      info: "Preț vechi 8500 € → 7500 €",
    },
    {
      img: "https://i.postimg.cc/pVqK2jtm/image-s-1000x700.jpg",
      name: "Mercedes-Benz G Class 270 CDI",
      info: "Preț vechi 46000 € → 40000 €",
    },
  ];

  const slugify = (str) =>
    str
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-");

  return (
    <div className="masini-page">
      <h1>🔥 Oferte Speciale</h1>

      <div className="masini-grid">
        {cars.map((car, index) => (
          <div className="masina-card" key={index}>
            <img src={car.img} alt={car.name} />
            <div className="masina-info">
              <h3>{car.name}</h3>
              <p>{car.info}</p>

              <Link to={`/masina/${slugify(car.name)}`}>
                <button>Vezi detalii</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Oferte;

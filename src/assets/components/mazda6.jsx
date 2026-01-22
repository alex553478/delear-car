import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layoutcars.css";

const Mazda6 = () => {
  const images = [
    { img: "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjIwc3ZlYjQyc2pteC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.znxqFdCMOhYUhV5li_eWzc4UQpjYNtP4hn4wlHzy9UM/image;s=1440x0;q=80" },
    { img: "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjBsczY4enY2bm1mZC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.AtYBvh56YhU17Vg1stP4KjC20HADHusHuPqiaFV1sbQ/image;s=1440x0;q=100" },
    { img: "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InhyNWV5MWp5ZHYyMDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.DN6SDJBVGQRRV1PWfg-OZv8Jnsp5jLvA0DIKKiMc8DA/image;s=1440x0;q=100" },
    { img: "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjgzYWwzejdyeG95MzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.g2rB7iiALTj4wtyRcffnJFJf3ZO3bVTe9LXNSddnHx4/image;s=1440x0;q=100" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="pagina-masina">

      {/* TITLU + PREȚ */}
      <div className="title">
        <h2>Mazda 6</h2>
        <p>Pret: €18,900</p>
      </div>

      {/* SERVICII + GALERIE + DETALII */}
      <div className="servicii-clienti">

        {/* SERVICII */}
        <section>
          <h3>Servicii clienti</h3>
          <p>Garantie 12 luni</p>
          <p>Verificare tehnica + test drive</p>

          <h3>Contact</h3>
          <p>0722 346 789</p>
          <p>dealerauto@gmail.com</p>

          <h3>Metode de plata</h3>
          <p>Cash</p>
          <p>Transfer bancar</p>
          <p>Rate</p>
          <p>Finantare parteneri</p>

          <Link to="/finantare" className="btn-finantare">Finantare</Link>
          <Link to="/contact" className="btn-contact">Contact</Link>
        </section>

        {/* GALERIE */}
        <div className="imagine-masina">
          <div className="featured-content">
            <img
              src={selectedImage.img}
              className="featured-image"
              alt="Mazda 6"
            />
          </div>

          <div className="image-selector">
            {images.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={`Mazda 6 ${i + 1}`}
                className={`thumbnail ${selectedImage.img === item.img ? "active" : ""}`}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>

        {/* DETALII MASINA */}
        <div className="informatii-masina">
          <h2>Detalii masina</h2>
          <p>Brand: Mazda</p>
          <p>Model: Mazda 6</p>
          <p>Kilometraj: 110.000 km</p>
          <p>An fabricatie: 2017</p>
          <p>Euro: 6</p>
          <p>Motor: 2.2 Skyactiv-D / 2.0 Skyactiv-G</p>
          <p>Putere motor: 150 - 175 CP</p>
          <p>Cutie: Manuală / Automată</p>
          <p>Tracțiune: FWD</p>
        </div>

      </div>

      {/* FEATURES */}
      <div className="features-wrapper">

        <section className="audio-conectivitate">
          <h2>Audio și conectivitate</h2>
          <p>Bose Sound System (opțional)</p>
          <p>Bluetooth</p>
          <p>Apple CarPlay / Android Auto</p>
          <p>USB / AUX</p>
          <p>Navigatie Mazda Connect</p>
          <p>Heads-Up Display (HUD)</p>
        </section>

        <section className="confort-interior">
          <h2>Confort și interior</h2>
          <ul>
            <li>Interior piele</li>
            <li>Scaune încălzite față</li>
            <li>Climatizare automată 2 zone</li>
            <li>Volan încălzit (opțional)</li>
            <li>Oglinzi electrice + încălzite</li>
            <li>Hayon electric (break)</li>
          </ul>
        </section>

        <section className="tehnologie-assistance">
          <h2>Tehnologie și asistență</h2>
          <ul>
            <li>Adaptive Cruise Control (ACC)</li>
            <li>Lane Assist</li>
            <li>Blind Spot Monitor</li>
            <li>Senzori parcare + cameră spate</li>
            <li>Start-Stop</li>
            <li>Drive Mode Select</li>
          </ul>
        </section>

        <section className="siguranta">
          <h2>Siguranță</h2>
          <ul>
            <li>ABS + EBD</li>
            <li>ESP</li>
            <li>Airbag-uri multiple</li>
            <li>Control tracțiune</li>
            <li>Isofix</li>
          </ul>
        </section>

        <section className="estetica">
          <h2>Exterior și estetică</h2>
          <ul>
            <li>Design Kodo</li>
            <li>Faruri LED Adaptive</li>
            <li>Jante aliaj 17"/19"</li>
            <li>Stopuri LED</li>
            <li>Vopsea metalizată</li>
            <li>Evacuare dublă (Skyactiv-D)</li>
          </ul>
        </section>
      </div>

      {/* BANNER NEWSLETTER */}
      <section
        className="newsletter-banner"
        style={{ backgroundImage: "url('https://i.postimg.cc/zBM9Pssb/peugeot-208.jpg')" }}
      >
        <div className="newsletter-overlay"></div>
        <div className="newsletter-content">
          <h3>Abonează-te la newsletter</h3>
          <p>Primești oferte + noutăți</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email" />
            <button>Abonează-te</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Mazda6;

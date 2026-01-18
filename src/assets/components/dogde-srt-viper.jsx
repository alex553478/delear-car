import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layoutcars.css";

const PaginaDodgeViperSRT = () => {
  const images = [
    { img: "https://i.postimg.cc/BZr9Qkyy/720x540.webp" },
    { img: "https://i.postimg.cc/HLZFGhXv/720x540.webp" },
    { img: "https://i.postimg.cc/sxSLhfqF/720x540.webp" },
    { img: "https://i.postimg.cc/Bv6wCBkm/720x540.webp" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="pagina-masina">
      {/* TITLU + PREȚ */}
      <div className="title">
        <h2>Dodge SRT Viper</h2>
        <p>Pret: €45,000</p>
      </div>

      {/* SERVICII + GALERIE */}
      <div className="servicii-clienti">
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

          <Link to="/finantare" className="btn-finantare">
            Finantare
          </Link>
          <Link to="/contact" className="btn-contact">
            Contact
          </Link>
        </section>

        <div className="imagine-masina">
          <div className="featured-content">
            <img
              src={selectedImage.img}
              className="featured-image"
              alt="Dodge Viper"
            />
          </div>

          <div className="image-selector">
            {images.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={`Dodge Viper ${i + 1}`}
                className={`thumbnail ${
                  selectedImage.img === item.img ? "active" : ""
                }`}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* DETALII MASINA */}
      <div className="informatii-masina">
        <h2>Detalii masina</h2>
        <p>Brand : Dodge</p>
        <p>Model : Viper SRT</p>
        <p>Kilometraj: 32.000 km</p>
        <p>An fabricatie: 2020</p>
        <p>Euro: 6</p>
        <p>Motor: 6.0 Turbo Benzină</p>
        <p>Putere motor: 450 CP</p>
        <p>Cutie: Manual / Automată</p>
        <p>Tracțiune: 4x4</p>
      </div>

      <section className="audio-conectivitate">
        <h2>Audio și conectivitate</h2>
        <p>Bluetooth</p>
        <p>Apple CarPlay</p>
        <p>Sistem audio premium</p>
        <p>Radio / Tuner</p>
      </section>

      <section className="confort-interior">
        <h2>Confort și interior</h2>
        <ul>
          <li>Climatizare automată</li>
          <li>Geamuri cu tentă UV</li>
          <li>Paddle-shifters</li>
          <li>Volan multifuncțional</li>
          <li>Comandă vocală</li>
          <li>Sistem navigație</li>
        </ul>
      </section>

      <section className="tehnologie-assistance">
        <h2>Tehnologie și asistență</h2>
        <ul>
          <li>Senzori ploaie / lumină</li>
          <li>Suspensie adaptivă</li>
          <li>Start-Stop</li>
        </ul>
      </section>

      <section className="siguranta">
        <h2>Siguranță</h2>
        <ul>
          <li>Sistem ABS</li>
          <li>ESP</li>
          <li>Airbag-uri multiple</li>
        </ul>
      </section>

      <section className="estetica">
        <h2>Exterior și estetică</h2>
        <ul>
          <li>Faruri Bi-Xenon</li>
          <li>Vopsea metalizată</li>
          <li>Ștergătoare cu senzori</li>
        </ul>
      </section>

      <section
        className="newsletter-banner"
        style={{
          backgroundImage: "url('https://i.postimg.cc/zBM9Pssb/peugeot-208.jpg')",
        }}
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

export default PaginaDodgeViperSRT;

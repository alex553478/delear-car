import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layoutcars.css";

const VwGolf7Rline = () => {
  const images = [
    { img: "https://i.postimg.cc/tTqhX6Tj/720x540.webp" },
    { img: "https://i.postimg.cc/BvgKwvCM/1920x1080.webp" },
    { img: "https://i.postimg.cc/NGVrnS1f/1920x1080.webp" },
    { img: "https://i.postimg.cc/FKDYVB92/1920x1080.webp" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="pagina-masina">

      {/* TITLU + PREȚ */}
      <div className="title">
        <h2>Volkswagen Golf 7 R-Line</h2>
        <p>Pret: €17,900</p>
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
              alt="VW Golf 7 R-Line"
            />
          </div>

          <div className="image-selector">
            {images.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={`Golf 7 R-Line ${i + 1}`}
                className={`thumbnail ${selectedImage.img === item.img ? "active" : ""}`}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>

        {/* DETALII */}
        <div className="informatii-masina">
          <h2>Detalii masina</h2>
          <p>Brand: Volkswagen</p>
          <p>Model: Golf 7 R-Line</p>
          <p>Kilometraj: 75.000 km</p>
          <p>An fabricatie: 2017</p>
          <p>Euro: 6</p>
          <p>Motor: 1.5 TSI / 2.0 TDI</p>
          <p>Putere motor: 150 CP</p>
          <p>Cutie: DSG Automată</p>
          <p>Tracțiune: FWD</p>
        </div>

      </div>

      {/* FEATURES */}
      <div className="features-wrapper">

        <section className="audio-conectivitate">
          <h2>Audio și conectivitate</h2>
          <p>Bluetooth</p>
          <p>Apple CarPlay / Android Auto</p>
          <p>Navigatie Discover Media</p>
          <p>USB / AUX / SD Card</p>
          <p>Hands-Free</p>
        </section>

        <section className="confort-interior">
          <h2>Confort și interior</h2>
          <ul>
            <li>Interior R-Line sport</li>
            <li>Climatizare automată 2 zone</li>
            <li>Scaune încălzite</li>
            <li>Volan piele R-Line</li>
            <li>Keyless Start</li>
            <li>Oglinzi electrice + încălzite</li>
          </ul>
        </section>

        <section className="tehnologie-assistance">
          <h2>Tehnologie și asistență</h2>
          <ul>
            <li>ACC (Adaptive Cruise Control)</li>
            <li>Lane Assist</li>
            <li>Front Assist + City Brake</li>
            <li>Senzori parcare + cameră spate</li>
            <li>Start-Stop</li>
            <li>Drive Mode Select</li>
          </ul>
        </section>

        <section className="siguranta">
          <h2>Siguranță</h2>
          <ul>
            <li>ABS + EBD</li>
            <li>ESP + XDS</li>
            <li>Airbag-uri multiple</li>
            <li>Isofix</li>
            <li>Control stabilitate</li>
          </ul>
        </section>

        <section className="estetica">
          <h2>Exterior și estetică</h2>
          <ul>
            <li>Pachet exterior R-Line</li>
            <li>Jante aliaj 18"</li>
            <li>Faruri LED</li>
            <li>Stopuri LED</li>
            <li>Vopsea metalizată</li>
            <li>Difuzor sport</li>
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

export default VwGolf7Rline;

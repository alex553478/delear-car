import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layoutcars.css";

const SkodaOctaviaScout = () => {
  const images = [
    { img: "https://i.postimg.cc/cLpkhFJC/image-s-1000x700.jpg" },
    { img: "https://i.postimg.cc/g0ysDd55/image-s-1000x700.jpg" },
    { img: "https://i.postimg.cc/ZK1LzCzV/image-s-1000x700.jpg" },
    { img: "https://i.postimg.cc/26c4c5xK/image-s-1000x700.jpg" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="pagina-masina">

      {/* TITLU + PRET */}
      <div className="title">
        <h2>Skoda Octavia Scout (III)</h2>
        <p>Pret: €22,900</p>
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
              alt="Skoda Octavia Scout 3"
            />
          </div>

          <div className="image-selector">
            {images.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={`Skoda Scout ${i + 1}`}
                className={`thumbnail ${selectedImage.img === item.img ? "active" : ""}`}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>

        {/* DETALII MASINA */}
        <div className="informatii-masina">
          <h2>Detalii masina</h2>
          <p>Brand: Skoda</p>
          <p>Model: Octavia Scout (III)</p>
          <p>Kilometraj: 95.000 km</p>
          <p>An fabricatie: 2017</p>
          <p>Euro: 6</p>
          <p>Motor: 2.0 TDI</p>
          <p>Putere motor: 184 CP</p>
          <p>Cutie: DSG Automată</p>
          <p>Tracțiune: 4x4 (Haldex)</p>
        </div>

      </div>

      {/* FEATURES */}
      <div className="features-wrapper">

        <section className="audio-conectivitate">
          <h2>Audio și conectivitate</h2>
          <p>Bluetooth</p>
          <p>Apple CarPlay / Android Auto</p>
          <p>Navigație Columbus</p>
          <p>USB / AUX</p>
          <p>SD Card + Radio digital DAB</p>
          <p>Sistem audio Canton (opțional)</p>
        </section>

        <section className="confort-interior">
          <h2>Confort și interior</h2>
          <ul>
            <li>Scaune încălzite față</li>
            <li>Climatizare automată 2 zone</li>
            <li>Volan multifuncțional</li>
            <li>Interior piele + Alcantara</li>
            <li>Oglinzi electrice + încălzite</li>
            <li>Hayon electric (opțional)</li>
          </ul>
        </section>

        <section className="tehnologie-assistance">
          <h2>Tehnologie și asistență</h2>
          <ul>
            <li>ACC (Adaptive Cruise Control)</li>
            <li>Lane Assist</li>
            <li>Senzori parcare + cameră spate</li>
            <li>Start-Stop</li>
            <li>Hill Descent Control</li>
            <li>Drive Mode Select</li>
          </ul>
        </section>

        <section className="siguranta">
          <h2>Siguranță</h2>
          <ul>
            <li>ABS + EBD</li>
            <li>ESP + XDS</li>
            <li>Airbag-uri multiple</li>
            <li>Frâne disc ventilate</li>
            <li>Șasiu ridicat + protecții offroad</li>
          </ul>
        </section>

        <section className="estetica">
          <h2>Exterior și estetică</h2>
          <ul>
            <li>Pachet Scout Offroad</li>
            <li>Jante aliaj 17"/18"</li>
            <li>Bare longitudinale aluminiu</li>
            <li>Faruri Bi-Xenon / LED</li>
            <li>Grilă + spoilere specifice Scout</li>
            <li>Vopsea metalizată</li>
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

export default SkodaOctaviaScout;

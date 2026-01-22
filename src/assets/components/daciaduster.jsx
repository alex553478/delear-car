import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layoutcars.css";

const DaciaDuster = () => {
  const images = [
    { img: "https://i.postimg.cc/2Sps6jfb/image-s-1440x0-q-80.jpg" },
    { img: "https://i.postimg.cc/htsR5FHD/image-s-1440x0-q-100.jpg" },
    { img: "https://i.postimg.cc/6p9DRjyG/image-s-1440x0-q-100.jpg" },
    { img: "https://i.postimg.cc/SQC5PF90/image-s-1440x0-q-100.jpg" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="pagina-masina">

      {/* TITLU + PREȚ */}
      <div className="title">
        <h2>Dacia Duster (I)</h2>
        <p>Pret: €8,200</p>
      </div>

      {/* SERVICII + GALERIE + DETALII */}
      <div className="servicii-clienti">

        {/* SERVICII */}
        <section>
          <h3>Servicii clienti</h3>
          <p>Garantie 6 luni</p>
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
              alt="Dacia Duster I"
            />
          </div>

          <div className="image-selector">
            {images.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={`Dacia Duster ${i + 1}`}
                className={`thumbnail ${selectedImage.img === item.img ? "active" : ""}`}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>

        {/* DETALII MASINA */}
        <div className="informatii-masina">
          <h2>Detalii masina</h2>
          <p>Brand: Dacia</p>
          <p>Model: Duster (I)</p>
          <p>Kilometraj: 120.000 km</p>
          <p>An fabricatie: 2013</p>
          <p>Euro: 5</p>
          <p>Motor: 1.5 dCi / 1.6 Benzina</p>
          <p>Putere motor: 90-110 CP</p>
          <p>Cutie: Manuală</p>
          <p>Tracțiune: FWD / 4x4</p>
        </div>

      </div>

      {/* FEATURES */}
      <div className="features-wrapper">

        <section className="audio-conectivitate">
          <h2>Audio și conectivitate</h2>
          <p>Bluetooth</p>
          <p>USB / AUX</p>
          <p>Radio CD MP3</p>
          <p>Handsfree</p>
          <p>Navigație (opțional)</p>
        </section>

        <section className="confort-interior">
          <h2>Confort și interior</h2>
          <ul>
            <li>Aer condiționat</li>
            <li>Geamuri electrice</li>
            <li>Volan reglabil</li>
            <li>Scaune încălzite (opțional)</li>
            <li>Oglinzi electrice</li>
          </ul>
        </section>

        <section className="tehnologie-assistance">
          <h2>Tehnologie și asistență</h2>
          <ul>
            <li>Computer bord</li>
            <li>Tempomat (la facelift)</li>
            <li>Senzori parcare spate</li>
            <li>Mod 4x4 Lock (versiunile AWD)</li>
          </ul>
        </section>

        <section className="siguranta">
          <h2>Siguranță</h2>
          <ul>
            <li>ABS + EBD</li>
            <li>ESP</li>
            <li>Airbag-uri frontale</li>
            <li>Airbag-uri laterale (opțional)</li>
            <li>Control stabilitate</li>
          </ul>
        </section>

        <section className="estetica">
          <h2>Exterior și estetică</h2>
          <ul>
            <li>Bare longitudinale</li>
            <li>Jante aliaj 16"</li>
            <li>Faruri halogen</li>
            <li>Vopsea metalizată</li>
            <li>Protectii plastic off-road</li>
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

export default DaciaDuster;

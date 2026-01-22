import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layoutcars.css";

const BmwSeria3 = () => {
  const images = [
    { img: "https://i.postimg.cc/J0ZxVybd/image-s-1440x0-q-80.jpg" },
    { img: "https://i.postimg.cc/VkYRpk5R/image-s-1440x0-q-100.jpg" },
    { img: "https://i.postimg.cc/KcPtbh6P/image-s-1440x0-q-100.jpg" },
    { img: "https://i.postimg.cc/2yrby3s9/image-s-1440x0-q-100.jpg" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="pagina-masina">

      {/* TITLU + PREȚ */}
      <div className="title">
        <h2>BMW Seria 3 (E90)</h2>
        <p>Pret: €7,500</p>
      </div>

      {/* SERVICII + GALERIE + DETALII */}
      <div className="servicii-clienti">

        {/* SERVICII */}
        <section>
          <h3>Servicii clienti</h3>
          <p>Garantie 3 luni</p>
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

        {/* GALERIE */}
        <div className="imagine-masina">
          <div className="featured-content">
            <img
              src={selectedImage.img}
              className="featured-image"
              alt="BMW E90"
            />
          </div>

          <div className="image-selector">
            {images.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={`BMW E90 ${i + 1}`}
                className={`thumbnail ${
                  selectedImage.img === item.img ? "active" : ""
                }`}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>

        {/* DETALII MASINA */}
        <div className="informatii-masina">
          <h2>Detalii masina</h2>
          <p>Brand: BMW</p>
          <p>Model: Seria 3 (E90)</p>
          <p>Kilometraj: 180.000 km</p>
          <p>An fabricatie: 2008</p>
          <p>Euro: 4</p>
          <p>Motor: 2.0 Diesel / 2.5 Benzina</p>
          <p>Putere motor: 143–218 CP</p>
          <p>Cutie: Manuală / Automată</p>
          <p>Tracțiune: RWD</p>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features-wrapper">

        <section className="audio-conectivitate">
          <h2>Audio și conectivitate</h2>
          <p>Bluetooth (opțional)</p>
          <p>AUX / USB</p>
          <p>Radio CD Business/Professional</p>
        </section>

        <section className="confort-interior">
          <h2>Confort și interior</h2>
          <ul>
            <li>Aer condiționat</li>
            <li>Scaune sport</li>
            <li>Volan piele</li>
            <li>Interior piele (opțional)</li>
            <li>Computer bord</li>
            <li>Geamuri electrice</li>
            <li>Oglinzi electrice</li>
          </ul>
        </section>

        <section className="tehnologie-assistance">
          <h2>Tehnologie și asistență</h2>
          <ul>
            <li>Tempomat</li>
            <li>Senzori parcare spate</li>
            <li>Start-Stop (benzina)</li>
            <li>Mod Eco/Comfort (limitativ)</li>
          </ul>
        </section>

        <section className="siguranta">
          <h2>Siguranță</h2>
          <ul>
            <li>ABS + EBD</li>
            <li>ESP</li>
            <li>Airbag-uri multiple</li>
            <li>Control stabilitate DSC</li>
          </ul>
        </section>

        <section className="estetica">
          <h2>Exterior și estetică</h2>
          <ul>
            <li>Faruri Xenon (opțional)</li>
            <li>Jante aliaj 16"/17"</li>
            <li>Pachet M (opțional)</li>
            <li>Vopsea metalizată</li>
            <li>Evacuare dublă (la 6 cilindri)</li>
          </ul>
        </section>
      </div>

      {/* BANNER NEWSLETTER */}
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

export default BmwSeria3;

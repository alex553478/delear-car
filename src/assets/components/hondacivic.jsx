import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layoutcars.css";

const HondaCivic18 = () => {
  const images = [
    { img: "https://i.postimg.cc/1tzrJnbB/image-s-1440x0-q-80.jpg" },
    { img: "https://i.postimg.cc/nht5T22T/image-s-1440x0-q-100.jpg" },
    { img: "https://i.postimg.cc/PfpRj9FB/image-s-1440x0-q-100.jpg" },
    { img: "https://i.postimg.cc/fbR8gr9x/image-s-1440x0-q-100.jpg" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="pagina-masina">

      {/* TITLU + PREȚ */}
      <div className="title">
        <h2>Honda Civic 1.8 i-VTEC</h2>
        <p>Pret: €4,900</p>
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

          <Link to="/finantare" className="btn-finantare">Finantare</Link>
          <Link to="/contact" className="btn-contact">Contact</Link>
        </section>

        {/* GALERIE */}
        <div className="imagine-masina">
          <div className="featured-content">
            <img
              src={selectedImage.img}
              className="featured-image"
              alt="Honda Civic 1.8"
            />
          </div>

          <div className="image-selector">
            {images.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={`Honda Civic ${i + 1}`}
                className={`thumbnail ${selectedImage.img === item.img ? "active" : ""}`}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>

        {/* DETALII MASINA */}
        <div className="informatii-masina">
          <h2>Detalii masina</h2>
          <p>Brand: Honda</p>
          <p>Model: Civic (VIII)</p>
          <p>Kilometraj: 185.000 km</p>
          <p>An fabricatie: 2008</p>
          <p>Euro: 4</p>
          <p>Motor: 1.8 i-VTEC</p>
          <p>Putere motor: 140 CP</p>
          <p>Cutie: Manuală / Automată</p>
          <p>Tracțiune: FWD</p>
        </div>

      </div>

      {/* FEATURES */}
      <div className="features-wrapper">

        <section className="audio-conectivitate">
          <h2>Audio și conectivitate</h2>
          <p>Radio / CD Player</p>
          <p>USB / AUX (opțional)</p>
          <p>Comenzi pe volan</p>
          <p>Handsfree (opțional)</p>
        </section>

        <section className="confort-interior">
          <h2>Confort și interior</h2>
          <ul>
            <li>Climatronic automat</li>
            <li>Scaune sport</li>
            <li>Volan piele</li>
            <li>Geamuri electrice</li>
            <li>Oglinzi electrice + încălzite</li>
            <li>Bord digital futurist</li>
          </ul>
        </section>

        <section className="tehnologie-assistance">
          <h2>Tehnologie și asistență</h2>
          <ul>
            <li>Cruise Control</li>
            <li>Computer bord</li>
            <li>Start-Stop (absent)</li>
            <li>Senzori parcare (opțional)</li>
          </ul>
        </section>

        <section className="siguranta">
          <h2>Siguranță</h2>
          <ul>
            <li>ABS + EBD</li>
            <li>VSA (Control stabilitate)</li>
            <li>Airbag-uri multiple</li>
            <li>Isofix</li>
          </ul>
        </section>

        <section className="estetica">
          <h2>Exterior și estetică</h2>
          <ul>
            <li>Faruri halogen / Xenon (opțional)</li>
            <li>Jante aliaj 16"</li>
            <li>Stopuri LED</li>
            <li>Vopsea metalizată</li>
            <li>Body hatch futurist</li>
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

export default HondaCivic18;

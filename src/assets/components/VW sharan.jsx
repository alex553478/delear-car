import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layoutcars.css";

const VwSharan = () => {
  const images = [
    { img: "hhttps://i.postimg.cc/BbyZwryz/image-s-1440x0-q-80.jpg" },
    { img: "https://i.postimg.cc/R0XBYrJj/image-s-1440x0-q-100.jpg" },
    { img: "https://i.postimg.cc/Z0ttN4XC/image-s-1440x0-q-100.jpg" },
    { img: "https://i.postimg.cc/cJ9Jnthx/image-s-1440x0-q-100.jpg" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="pagina-masina">

      {/* TITLU + PRET */}
      <div className="title">
        <h2>Volkswagen Sharan 2.0 TDI</h2>
        <p>Pret: €19,500</p>
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
              alt="VW Sharan"
            />
          </div>

          <div className="image-selector">
            {images.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={`VW Sharan ${i + 1}`}
                className={`thumbnail ${selectedImage.img === item.img ? "active" : ""}`}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>

        {/* DETALII MASINA */}
        <div className="informatii-masina">
          <h2>Detalii masina</h2>
          <p>Brand: Volkswagen</p>
          <p>Model: Sharan</p>
          <p>Kilometraj: 140.000 km</p>
          <p>An fabricatie: 2017</p>
          <p>Euro: 6</p>
          <p>Motor: 2.0 TDI</p>
          <p>Putere motor: 150 CP</p>
          <p>Cutie: DSG Automată</p>
          <p>Locuri: 7</p>
          <p>Tracțiune: FWD</p>
        </div>

      </div>

      {/* FEATURES */}
      <div className="features-wrapper">

        <section className="audio-conectivitate">
          <h2>Audio și conectivitate</h2>
          <p>Bluetooth</p>
          <p>USB / AUX</p>
          <p>SD Card</p>
          <p>Radio / Media</p>
          <p>Navigație (opțional)</p>
          <p>Hands-Free</p>
        </section>

        <section className="confort-interior">
          <h2>Confort și interior</h2>
          <ul>
            <li>Climatizare automată 3 zone</li>
            <li>Scaune încălzite</li>
            <li>Scaune individuale spate</li>
            <li>Uși culisante electrice</li>
            <li>Volan multifuncțional</li>
            <li>Oglinzi electrice + încălzite</li>
            <li>Hay-on electric (opțional)</li>
          </ul>
        </section>

        <section className="tehnologie-assistance">
          <h2>Tehnologie și asistență</h2>
          <ul>
            <li>ACC (Adaptive Cruise Control)</li>
            <li>Front Assist</li>
            <li>Cameră spate + senzori parcare</li>
            <li>Start-Stop</li>
            <li>Keyless Entry</li>
            <li>Drive Mode Select</li>
          </ul>
        </section>

        <section className="siguranta">
          <h2>Siguranță</h2>
          <ul>
            <li>ABS + EBD</li>
            <li>ESP</li>
            <li>Airbag-uri multiple (inclusiv spate)</li>
            <li>Isofix pe 3 rânduri</li>
            <li>Control stabilitate</li>
          </ul>
        </section>

        <section className="estetica">
          <h2>Exterior și estetică</h2>
          <ul>
            <li>Jante aliaj 16"/17"</li>
            <li>Faruri Bi-Xenon / LED (la facelift)</li>
            <li>Uși laterale culisante</li>
            <li>Bare longitudinale aluminiu</li>
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

export default VwSharan;

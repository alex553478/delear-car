import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layoutcars.css";

const MercedesG270CDI = () => {
  const images = [
    { img: "https://img.classistatic.de/api/v1/mo-prod/images/84/8492c756-5d37-4327-a5d7-60ead61a8578?rule=mo-1600" },
    { img: "https://img.classistatic.de/api/v1/mo-prod/images/60/6051b8cc-0169-4350-bef0-b8192bb2e28f?rule=mo-1600" },
    { img: "https://img.classistatic.de/api/v1/mo-prod/images/b0/b02c4613-d3f1-4cee-8c3a-1a82f73c68af?rule=mo-1600" },
    { img: "https://img.classistatic.de/api/v1/mo-prod/images/2b/2b5265c0-f1ee-4dbb-95ba-b8208b2b415e?rule=mo-1600" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="pagina-masina">

      {/* TITLU + PRET */}
      <div className="title">
        <h2>Mercedes-Benz G-Class 270 CDI</h2>
        <p>Pret: €35,900</p>
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
              alt="Mercedes G270 CDI"
            />
          </div>

          <div className="image-selector">
            {images.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={`G270 ${i + 1}`}
                className={`thumbnail ${selectedImage.img === item.img ? "active" : ""}`}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>

        {/* DETALII MASINA */}
        <div className="informatii-masina">
          <h2>Detalii masina</h2>
          <p>Brand: Mercedes-Benz</p>
          <p>Model: G-Class W463</p>
          <p>Versiune: 270 CDI</p>
          <p>Kilometraj: 210.000 km</p>
          <p>An fabricatie: 2005</p>
          <p>Euro: 3 / 4</p>
          <p>Motor: 2.7 CDI OM612</p>
          <p>Putere motor: 163 CP</p>
          <p>Cutie: Automată 5G-Tronic</p>
          <p>Tracțiune: 4x4 Permanent + Reductoare</p>
        </div>

      </div>

      {/* FEATURES */}
      <div className="features-wrapper">

        <section className="audio-conectivitate">
          <h2>Audio și conectivitate</h2>
          <p>Bluetooth (opțional)</p>
          <p>Radio / CD</p>
          <p>Navigație (Command)</p>
          <p>Comenzi volan</p>
        </section>

        <section className="confort-interior">
          <h2>Confort și interior</h2>
          <ul>
            <li>Interior piele</li>
            <li>Scaune încălzite</li>
            <li>Climatizare automată</li>
            <li>Geamuri electrice</li>
            <li>Oglinzi electrice + încălzite</li>
            <li>Volan piele</li>
          </ul>
        </section>

        <section className="tehnologie-assistance">
          <h2>Tehnologie și asistență</h2>
          <ul>
            <li>3 Blocante diferențiale (FAȚĂ / CENTRAL / SPATE)</li>
            <li>Reductoare Low-Range</li>
            <li>ESP + ABS</li>
            <li>4ETS Offroad Control</li>
            <li>Cruise Control</li>
          </ul>
        </section>

        <section className="siguranta">
          <h2>Siguranță</h2>
          <ul>
            <li>Airbag-uri frontale</li>
            <li>Control stabilitate</li>
            <li>Control tracțiune</li>
            <li>Frâne disc</li>
            <li>Isofix (mai rar pe anii ăștia)</li>
          </ul>
        </section>

        <section className="estetica">
          <h2>Exterior și estetică</h2>
          <ul>
            <li>Design clasic G-Wagen</li>
            <li>Jante aliaj 16"/18"</li>
            <li>Protecții off-road</li>
            <li>Bare longitudinale</li>
            <li>Roată spate pe hayon</li>
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

export default MercedesG270CDI;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layoutcars.css";

const MitsubishiASX = () => {
  const images = [
    { img: "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImtrNXFmNTB1MGlvYjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.m--Ph2ZYHJpQFrFWzgMjGpuqdV07Eh3XTyKuOI2OMNE/image;s=1440x0;q=80" },
    { img: "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImcyOGhmcXN4aWppdDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.vD0E6IhzPxzBb_jMqiI75U_QGKNkmTl0jom0_ZOZtgY/image;s=1440x0;q=100" },
    { img: "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImpsOTQwY24xOGJhbTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.-r9Tmb4mdf0VEhmyScy7WYWkseDRemltLlKkN4ps1AE/image;s=1440x0;q=100" },
    { img: "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im1tNTBlcThyend4MjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.bx_XmCFVpGoJhUdi3iYj2crCet5CeDU02_gZKa2eSeo/image;s=1440x0;q=100" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="pagina-masina">

      {/* TITLU + PRET */}
      <div className="title">
        <h2>Mitsubishi ASX 2.2 DI-D 4WD</h2>
        <p>Pret: €17,500</p>
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
              alt="Mitsubishi ASX"
            />
          </div>

          <div className="image-selector">
            {images.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={`ASX ${i + 1}`}
                className={`thumbnail ${selectedImage.img === item.img ? "active" : ""}`}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>

        {/* DETALII */}
        <div className="informatii-masina">
          <h2>Detalii masina</h2>
          <p>Brand: Mitsubishi</p>
          <p>Model: ASX</p>
          <p>Kilometraj: 98.000 km</p>
          <p>An fabricatie: 2017</p>
          <p>Euro: 6</p>
          <p>Motor: 2.2 DI-D</p>
          <p>Putere: 150 CP</p>
          <p>Cutie: Automată</p>
          <p>Tracțiune: 4WD</p>
        </div>

      </div>

      {/* FEATURES */}
      <div className="features-wrapper">

        <section className="audio-conectivitate">
          <h2>Audio și conectivitate</h2>
          <p>Bluetooth</p>
          <p>USB / AUX</p>
          <p>Radio Digital DAB</p>
          <p>Navigatie (opțional)</p>
          <p>Handsfree</p>
        </section>

        <section className="confort-interior">
          <h2>Confort și interior</h2>
          <ul>
            <li>Interior piele (opțional)</li>
            <li>Scaune încălzite</li>
            <li>Climatizare automată</li>
            <li>Volan multifuncțional</li>
            <li>Oglinzi electrice + încălzite</li>
            <li>Keyless Entry + Start</li>
          </ul>
        </section>

        <section className="tehnologie-assistance">
          <h2>Tehnologie și asistență</h2>
          <ul>
            <li>4WD Select (2WD / Auto / Lock)</li>
            <li>Tempomat</li>
            <li>Senzori parcare + cameră spate</li>
            <li>Start-Stop</li>
            <li>Hill Assist</li>
          </ul>
        </section>

        <section className="siguranta">
          <h2>Siguranță</h2>
          <ul>
            <li>ABS + EBD</li>
            <li>ESP</li>
            <li>Airbag-uri multiple</li>
            <li>Isofix</li>
            <li>Control stabilitate</li>
          </ul>
        </section>

        <section className="estetica">
          <h2>Exterior și estetică</h2>
          <ul>
            <li>Faruri Xenon / LED (opțional)</li>
            <li>Jante aliaj 17"/18"</li>
            <li>Grilă Dynamic Shield</li>
            <li>Protectii off-road</li>
            <li>Bare longitudinale</li>
            <li>Stopuri LED</li>
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

export default MitsubishiASX;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layoutcars.css";

const LoganMcv4x4 = () => {
  const images = [
    { img: "https://i.postimg.cc/1XnT7YbB/image-s-1440x0-q-80.jpg" },
    { img: "https://i.postimg.cc/yYqs4FnD/image-s-1440x0-q-100.jpg" },
    { img: "https://i.postimg.cc/x152zBQZ/image-s-1440x0-q-100.jpg" },
    { img: "https://i.postimg.cc/qMdVZpM6/image-s-1440x0-q-100.jpg" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="pagina-masina">

      {/* TITLU + PREȚ */}
      <div className="title">
        <h2>Renault Logan MCV 2.0 dCi 4x4</h2>
        <p>Pret: €6,900</p>
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
              alt="Renault Logan MCV 4x4"
            />
          </div>

          <div className="image-selector">
            {images.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={`Logan MCV ${i + 1}`}
                className={`thumbnail ${selectedImage.img === item.img ? "active" : ""}`}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>

        {/* DETALII */}
        <div className="informatii-masina">
          <h2>Detalii masina</h2>
          <p>Brand: Renault</p>
          <p>Model: Logan MCV</p>
          <p>Kilometraj: 160.000 km</p>
          <p>An fabricatie: 2009</p>
          <p>Euro: 4</p>
          <p>Motor: 2.0 dCi (Custom)</p>
          <p>Putere motor: 150 CP</p>
          <p>Cutie: Manuală 6 trepte</p>
          <p>Tracțiune: 4x4</p>
        </div>

      </div>

      {/* FEATURES */}
      <div className="features-wrapper">

        <section className="audio-conectivitate">
          <h2>Audio și conectivitate</h2>
          <p>Radio CD</p>
          <p>AUX</p>
          <p>USB (optional)</p>
          <p>Comenzi volan</p>
        </section>

        <section className="confort-interior">
          <h2>Confort și interior</h2>
          <ul>
            <li>Aer condiționat</li>
            <li>Geamuri electrice față</li>
            <li>Oglinzi electrice</li>
            <li>Volan reglabil</li>
            <li>Scaune confort</li>
            <li>Portbagaj mare (MCV)</li>
          </ul>
        </section>

        <section className="tehnologie-assistance">
          <h2>Tehnologie și asistență</h2>
          <ul>
            <li>Computer bord</li>
            <li>Senzori parcare spate (opțional)</li>
            <li>Blocare diferențial (custom 4x4)</li>
            <li>Suspensie înălțată (offroad)</li>
          </ul>
        </section>

        <section className="siguranta">
          <h2>Siguranță</h2>
          <ul>
            <li>ABS + EBD</li>
            <li>Airbag-uri frontale</li>
            <li>ESP (opțional)</li>
            <li>Control stabilitate</li>
          </ul>
        </section>

        <section className="estetica">
          <h2>Exterior și estetică</h2>
          <ul>
            <li>Bare longitudinale</li>
            <li>Protectii plastic offroad</li>
            <li>Garda la sol mărită</li>
            <li>Jante 4x4 oțel / aliaj</li>
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

export default LoganMcv4x4;

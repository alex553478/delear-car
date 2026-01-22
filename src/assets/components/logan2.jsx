import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layoutcars.css";

const DaciaLoganStepway = () => {
  const images = [
    { img: "https://i.postimg.cc/s24Nff1G/image-s-1440x0-q-80.jpg" },
    { img: "https://i.postimg.cc/DfRkMZG4/image-s-1440x0-q-100.jpg" },
    { img: "https://i.postimg.cc/FKTwgsmL/image-s-1440x0-q-100.jpg" },
    { img: "https://i.postimg.cc/4xZ0DhxQ/image-s-1440x0-q-100.jpg" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="pagina-masina">

      {/* TITLU + PREȚ */}
      <div className="title">
        <h2>Dacia Logan II Stepway</h2>
        <p>Pret: €10,900</p>
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
              alt="Dacia Logan Stepway"
            />
          </div>

          <div className="image-selector">
            {images.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={`Logan Stepway ${i + 1}`}
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
          <p>Model: Logan II Stepway</p>
          <p>Kilometraj: 65.000 km</p>
          <p>An fabricatie: 2019</p>
          <p>Euro: 6</p>
          <p>Motor: 0.9 TCe / 1.5 dCi</p>
          <p>Putere motor: 90 CP</p>
          <p>Cutie: Manuală</p>
          <p>Tracțiune: FWD</p>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features-wrapper">

        <section className="audio-conectivitate">
          <h2>Audio și conectivitate</h2>
          <p>Bluetooth</p>
          <p>USB / AUX</p>
          <p>MediaNav Evolution</p>
          <p>Apple CarPlay / Android Auto</p>
          <p>Handsfree</p>
        </section>

        <section className="confort-interior">
          <h2>Confort și interior</h2>
          <ul>
            <li>Climatizare automată</li>
            <li>Scaune încălzite (opțional)</li>
            <li>Volan multifuncțional</li>
            <li>Oglinzi electrice + încălzite</li>
            <li>Geamuri electrice față/spate</li>
            <li>Senzori presiune anvelope</li>
          </ul>
        </section>

        <section className="tehnologie-assistance">
          <h2>Tehnologie și asistență</h2>
          <ul>
            <li>Cruise Control + Limitator</li>
            <li>Senzori parcare spate</li>
            <li>Camera marșarier (opțional)</li>
            <li>Start-Stop</li>
            <li>Computer bord</li>
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
            <li>Pachet Stepway Offroad</li>
            <li>Jante aliaj 16"</li>
            <li>Garda la sol mărită</li>
            <li>Bare longitudinale</li>
            <li>Protecții plastic laterale</li>
            <li>Faruri LED + DRL LED</li>
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

export default DaciaLoganStepway;

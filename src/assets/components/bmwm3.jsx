import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layoutcars.css";

const BmwM3 = () => {
  const images = [
    { img: "https://i.postimg.cc/PNnX6kLP/image-s-1440x0-q-80.jpg" },
    { img: "https://i.postimg.cc/BvnK5xf4/image-s-1440x0-q-100.jpg" },
    { img: "https://i.postimg.cc/L6FgQdFZ/image-s-1440x0-q-100.jpg" },
    { img: "https://i.postimg.cc/brxrfJf9/image-s-1440x0-q-100.jpg" }
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="pagina-masina">

      {/* TITLU + PRET */}
      <div className="title">
        <h2>BMW M3</h2>
        <p>Pret: €100,000</p>
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
            <img src={selectedImage.img} className="featured-image" alt="BMW M3" />
          </div>

          <div className="image-selector">
            {images.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={`BMW M3 - ${i + 1}`}
                className={`thumbnail ${selectedImage.img === item.img ? "active" : ""}`}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>

        {/* DETALII MASINA */}
        <div className="informatii-masina">
          <h2>Detalii masina</h2>
          <p>Brand: BMW</p>
          <p>Model: M3</p>
          <p>Kilometraj: 25.000 km</p>
          <p>An fabricatie: 2020</p>
          <p>Euro: 6</p>
          <p>Motor: 3.0 L Twin Turbo</p>
          <p>Putere motor: 510 CP</p>
          <p>Cutie: Automată / Manuală</p>
          <p>Tracțiune: RWD / AWD</p>
        </div>

      </div> {/* END LAYOUT PRINCIPAL */}

      {/* SECTIUNI FEATURES */}
      <div className="features-wrapper">

        <section className="audio-conectivitate">
          <h2>Audio și conectivitate</h2>
          <p>Bluetooth</p>
          <p>Apple CarPlay</p>
          <p>Android Auto</p>
          <p>Sistem audio Harman Kardon</p>
          <p>USB / AUX</p>
          <p>Radio digital DAB</p>
        </section>

        <section className="confort-interior">
          <h2>Confort și interior</h2>
          <ul>
            <li>Scaune sport M Performance</li>
            <li>Climatizare automată pe 3 zone</li>
            <li>Volan sport din piele M</li>
            <li>Interior piele Merino</li>
            <li>Head-Up Display</li>
            <li>Sistem navigație profesional</li>
            <li>Cameră marșarier + 360°</li>
          </ul>
        </section>

        <section className="tehnologie-assistance">
          <h2>Tehnologie și asistență</h2>
          <ul>
            <li>Moduri de condus (Comfort / Sport / Sport+)</li>
            <li>Control tracțiune M Dynamic</li>
            <li>Suspensie adaptivă M</li>
            <li>Start-Stop</li>
            <li>Senzori parcare față-spate</li>
          </ul>
        </section>

        <section className="siguranta">
          <h2>Siguranță</h2>
          <ul>
            <li>ABS + EBD</li>
            <li>ESP</li>
            <li>Airbag-uri multiple</li>
            <li>Frâne M Sport Brembo</li>
            <li>Șasiu rigidizat M</li>
          </ul>
        </section>

        <section className="estetica">
          <h2>Exterior și estetică</h2>
          <ul>
            <li>Faruri Laser BMW</li>
            <li>Jante forjate 19"/20"</li>
            <li>Pachet exterior M Performance</li>
            <li>Difuzor spate din carbon</li>
            <li>Aleron spate M</li>
            <li>Evacuare M Sport</li>
          </ul>
        </section>

      </div>

      {/* BANNER NEWSLETTER */}
      <section
        className="newsletter-banner"
        style={{
          backgroundImage: "url('https://i.postimg.cc/zBM9Pssb/peugeot-208.jpg')"
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

export default BmwM3;

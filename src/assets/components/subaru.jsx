import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layoutcars.css";

const SubaruForester = () => {
  const images = [
    { img: "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im92dGRzbTFsYW44ODMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.eQmCKRYUg7Kr80YMpZaA7koTmCxJj0rKcYWtOsG42bI/image;s=1440x0;q=80" },
    { img: "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjZjZDY1cTBlZTBjazEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.T-EqmnB8-WlAmHjoC7uW3ygKshmRoJauoxkxlGUxHnw/image;s=1440x0;q=100" },
    { img: "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZyNHpvODcyZXp6ZjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.67C6pcmmS_xZgW5jzs_BH63I5b6FCneVg_hKo6c05sw/image;s=1440x0;q=100" },
    { img: "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Im9najhnMm4yejN3cS1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.SIrMwo61962c5e0_9mQuvbfr2SXrJ_siU9Hvxr1kDeI/image;s=1440x0;q=100" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="pagina-masina">

      {/* TITLU + PRET */}
      <div className="title">
        <h2>Subaru Forester AWD</h2>
        <p>Pret: €19,900</p>
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
              alt="Subaru Forester"
            />
          </div>

          <div className="image-selector">
            {images.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={`Forester ${i + 1}`}
                className={`thumbnail ${selectedImage.img === item.img ? "active" : ""}`}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>

        {/* DETALII */}
        <div className="informatii-masina">
          <h2>Detalii masina</h2>
          <p>Brand: Subaru</p>
          <p>Model: Forester</p>
          <p>Kilometraj: 105.000 km</p>
          <p>An fabricatie: 2018</p>
          <p>Euro: 6</p>
          <p>Motor: 2.0i Boxer</p>
          <p>Putere motor: 150 CP</p>
          <p>Cutie: Automată CVT (Lineartronic)</p>
          <p>Tracțiune: AWD (Symmetrical)</p>
        </div>

      </div>

      {/* FEATURES */}
      <div className="features-wrapper">

        <section className="audio-conectivitate">
          <h2>Audio și conectivitate</h2>
          <p>Bluetooth</p>
          <p>USB</p>
          <p>Handsfree</p>
          <p>Navigatie (opțional)</p>
          <p>Radio DAB</p>
        </section>

        <section className="confort-interior">
          <h2>Confort și interior</h2>
          <ul>
            <li>Scaune încălzite</li>
            <li>Climatizare automată 2 zone</li>
            <li>Interior piele (opțional)</li>
            <li>Volan încălzit</li>
            <li>Hayon electric</li>
            <li>Keyless Entry + Start</li>
          </ul>
        </section>

        <section className="tehnologie-assistance">
          <h2>Tehnologie și asistență</h2>
          <ul>
            <li>Adaptive Cruise Control (EyeSight)</li>
            <li>Lane Keep Assist</li>
            <li>Blind Spot Monitor</li>
            <li>Cameră spate + senzori</li>
            <li>Hill Descent Control</li>
            <li>X-Mode AWD</li>
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
            <li>Faruri LED</li>
            <li>Jante aliaj 17"/18"</li>
            <li>Bare longitudinale</li>
            <li>Garda înaltă off-road</li>
            <li>Stopuri LED</li>
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

export default SubaruForester;

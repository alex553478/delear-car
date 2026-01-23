import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layoutcars.css";

const RangeRoverEvoque = () => {
  const images = [
    { img: "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inp5dDN2Mjd0ZXNpMTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.MnGilviGIGwdqvlj0StUwcWOaqDuYIzuIdcZk5mw3Fc/image;s=1440x0;q=100" },
    { img: "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InEwbmRzaDZrNG92ejItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.yt6M-r3QlTe7xvCLPB3jbfHYp1UI--9R-Rl9P_Jsvcw/image;s=1440x0;q=100" },
    { img: "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InRkM3JqcDl2YTE3czMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.yY4p6tdCSF0rlnMIjCWxcLoTQorf6ysiXSj_2h5rSYw/image;s=1440x0;q=100" },
    { img: "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InpxMncycXdzZ2Q0NDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.re8rJ59NuMHWOU6xrVmmBR5DVuNMe0TUDlHzACmB5BQ/image;s=1440x0;q=100" },
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="pagina-masina">

      {/* TITLU + PREȚ */}
      <div className="title">
        <h2>Range Rover Evoque R-Dynamic</h2>
        <p>Pret: €45,900</p>
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
              alt="Range Rover Evoque R-Dynamic"
            />
          </div>

          <div className="image-selector">
            {images.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={`Evoque R-Dynamic ${i + 1}`}
                className={`thumbnail ${selectedImage.img === item.img ? "active" : ""}`}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>

        {/* DETALII */}
        <div className="informatii-masina">
          <h2>Detalii masina</h2>
          <p>Brand: Land Rover</p>
          <p>Model: Range Rover Evoque</p>
          <p>Versiune: R-Dynamic</p>
          <p>Kilometraj: 48.000 km</p>
          <p>An fabricatie: 2021</p>
          <p>Euro: 6d</p>
          <p>Motor: D240 / Si4 / P200</p>
          <p>Putere motor: 200-240 CP</p>
          <p>Cutie: Automată 9 trepte</p>
          <p>Tracțiune: AWD</p>
        </div>

      </div>

      {/* FEATURES */}
      <div className="features-wrapper">

        <section className="audio-conectivitate">
          <h2>Audio și conectivitate</h2>
          <p>Meridian Audio System</p>
          <p>Bluetooth</p>
          <p>Apple CarPlay / Android Auto</p>
          <p>USB-C / USB</p>
          <p>Touch Pro Duo</p>
          <p>Navigatie</p>
        </section>

        <section className="confort-interior">
          <h2>Confort și interior</h2>
          <ul>
            <li>Interior piele Windsor</li>
            <li>Scaune electrice + încălzite</li>
            <li>Climatizare automată 2 zone</li>
            <li>Keyless Entry + Start</li>
            <li>Volan încălzit</li>
            <li>Panoramic Roof</li>
          </ul>
        </section>

        <section className="tehnologie-assistance">
          <h2>Tehnologie și asistență</h2>
          <ul>
            <li>Adaptive Cruise Control</li>
            <li>Lane Assist</li>
            <li>Blind Spot Monitor</li>
            <li>Cameră 360 + PDC</li>
            <li>Terrain Response 2</li>
            <li>Torque Vectoring AWD</li>
          </ul>
        </section>

        <section className="siguranta">
          <h2>Siguranță</h2>
          <ul>
            <li>ABS + EBD</li>
            <li>ESP + Traction Control</li>
            <li>Airbag-uri multiple</li>
            <li>Isofix</li>
            <li>Control coborâre pantă</li>
          </ul>
        </section>

        <section className="estetica">
          <h2>Exterior și estetică</h2>
          <ul>
            <li>Pachet exterior R-Dynamic</li>
            <li>Faruri Matrix LED</li>
            <li>Jante aliaj 20"</li>
            <li>Evacuare sport</li>
            <li>Accente gloss black / bronze</li>
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

export default RangeRoverEvoque;

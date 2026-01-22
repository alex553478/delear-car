import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./layoutcars.css"

const Lotus = () => {
  const images = [
    { img: "https://i.postimg.cc/RVVD2YmB/975f7a81-da12-49ef-977e-2a2fec5dfd7e-rule-mo-1600.jpg" },
    { img: "https://i.postimg.cc/TwJt4VHD/8c0f8ba0-5ca5-40eb-96c7-1b4be70127a3-rule-mo-1600.jpg" },
    { img: "https://i.postimg.cc/YCLbHKsp/8d520b27-1e5c-491c-b6a0-9a2fbca61a29-rule-mo-1600.jpg" },
    { img: "https://i.postimg.cc/FzngMDbr/839caa7e-c53a-46e0-a76e-d881680c278c-rule-mo-1600.jpg" }
  ]

  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="pagina-masina">

      {/* TITLU + PRET */}
      <div className="title">
        <h2>Lotus Evora</h2>
        <p>Pret: €60,000</p>
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

        {/* GALERIE IMAGINI */}
        <div className="imagine-masina">
          <div className="featured-content">
            <img
              src={selectedImage.img}
              className="featured-image"
              alt="Lotus Evora"
            />
          </div>

          <div className="image-selector">
            {images.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={`Lotus Evora ${i + 1}`}
                className={`thumbnail ${selectedImage.img === item.img ? "active" : ""}`}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>

        {/* DETALII MASINA */}
        <div className="informatii-masina">
          <h2>Detalii masina</h2>
          <p>Brand : Lotus</p>
          <p>Model : Evora</p>
          <p>Kilometraj: 25.000 km</p>
          <p>An fabricatie: 2005</p>
          <p>Euro: 5</p>
          <p>Motor: 3.5 v6</p>
          <p>Putere motor: 450 CP</p>
          <p>Cutie: Manual / Automată</p>
          <p>Tracțiune: 4x4</p>
        </div>

      </div> {/* <-- închis flexul */}

      {/* SECTIUNI FEATURES */}
      <div className="features-wrapper">

        <section className="audio-conectivitate">
          <h2>Audio și conectivitate</h2>
          <p>Bluetooth</p>
          <p>Apple CarPlay</p>
          <p>Android Auto</p>
          <p>Sistem audio premium Alpine</p>
          <p>USB / AUX</p>
          <p>Radio digital DAB</p>
        </section>

        <section className="confort-interior">
          <h2>Confort și interior</h2>
          <ul>
            <li>Scaune sport Recaro</li>
            <li>Climatizare automată</li>
            <li>Volan sport îmbrăcat în piele</li>
            <li>Interior piele + Alcantara</li>
            <li>Paddle-shifters (IPS)</li>
            <li>Sistem navigație integrat</li>
            <li>Cameră marșarier</li>
          </ul>
        </section>

        <section className="tehnologie-assistance">
          <h2>Tehnologie și asistență</h2>
          <ul>
            <li>Moduri de condus (Sport / Race)</li>
            <li>Control tracțiune optimizat</li>
            <li>Suspensie sport Bilstein</li>
            <li>Start-Stop</li>
            <li>Senzori parcare spate</li>
          </ul>
        </section>

        <section className="siguranta">
          <h2>Siguranță</h2>
          <ul>
            <li>ABS + EBD</li>
            <li>ESP</li>
            <li>Airbag-uri frontale + laterale</li>
            <li>Frâne Brembo High Performance</li>
            <li>Șasiu din aluminiu extrudat</li>
          </ul>
        </section>

        <section className="estetica">
          <h2>Exterior și estetică</h2>
          <ul>
            <li>Faruri Bi-Xenon</li>
            <li>Jante forjate 19"/20"</li>
            <li>Vopsea metalizată</li>
            <li>Difuzor spate din carbon</li>
            <li>Aleron sport spate</li>
            <li>Capotă ventilată</li>
          </ul>
        </section>
      </div>

      {/* BANNER */}
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
  )
}

export default Lotus

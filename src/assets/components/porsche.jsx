import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./layoutcars.css"

const PaginaPorsche = () => {

  const images = [
    { img: "https://i.postimg.cc/8CrGkG44/049ed924-2286-47b6-a42d-923d7a1b1db3-rule-mo-1600.jpg" },
    { img: "https://i.postimg.cc/JzsVK89Z/06395490-b2f2-4ece-b7aa-d6fa88be86dc-rule-mo-1600.jpg" },
    { img: "https://i.postimg.cc/BbbMsS5R/d3ce9687-82f4-4327-a0b6-d7256ba3f1f7-rule-mo-1600.jpg" },
    { img: "https://i.postimg.cc/4d5Ss2DW/a047e579-3718-44dd-a14c-1f2968a8b199-rule-mo-1600.jpg" }
  ]

  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="pagina-masina">

      <div className="title">
        <h2>Porsche 718 Cayman</h2>
        <p>Pret: €72,000</p>
      </div>

      <div className="servicii-clienti">
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

        <div className="imagine-masina">
          <div className="featured-content">
            <img src={selectedImage.img} className="featured-image" />
          </div>

          <div className="image-selector">
            {images.map((item, i) => (
              <img
                key={i}
                src={item.img}
                className={`thumbnail ${selectedImage.img === item.img ? "active" : ""}`}
                onClick={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* DETALII MASINA */}
      <div className="informatii-masina">
        <h2>Detalii tehnice</h2>
        <p>Brand: Porsche</p>
        <p>Model: Cayman 718</p>
        <p>Kilometraj: 15.000 km</p>
        <p>An fabricatie: 2021</p>
        <p>Euro 6</p>
        <p>Motor: 2.5 Turbo (Diesel – dacă vrei, dar în realitate e benzină)</p>
        <p>Putere: 250 CP</p>
        <p>Cutie: Manual / Automată (completabil)</p>
        <p>Tractiune: Spate</p>
      </div>

      <section className="audio-conectivitate">
        <h2>Audio & Conectivitate</h2>
        <ul>
          <li>Bluetooth</li>
          <li>Apple CarPlay</li>
          <li>Sistem audio premium</li>
          <li>Radio / Tuner</li>
        </ul>
      </section>

      <section className="confort-interior">
        <h2>Confort & Interior</h2>
        <ul>
          <li>Climatizare automată</li>
          <li>Geamuri cu tentă UV</li>
          <li>Paddle-shifters</li>
          <li>Volan multifuncțional</li>
          <li>Comandă vocală</li>
          <li>Sistem navigație</li>
        </ul>
      </section>

      <section className="tehnologie-assistance">
        <h2>Tehnologie & Asistență</h2>
        <ul>
          <li>Senzori de ploaie/lumină</li>
          <li>Suspensie adaptivă</li>
          <li>Start-Stop</li>
        </ul>
      </section>

      <section className="siguranta">
        <h2>Siguranță</h2>
        <ul>
          <li>ABS</li>
          <li>ESP</li>
          <li>Airbag-uri multiple</li>
        </ul>
      </section>

      <section className="estetica">
        <h2>Exterior & Estetică</h2>
        <ul>
          <li>Faruri Bi-xenon</li>
          <li>Vopsea metalizată</li>
          <li>Stergătoare cu senzori</li>
        </ul>
      </section>

      <section className="newsletter-banner" style={{
        backgroundImage: "url('https://i.postimg.cc/zBM9Pssb/peugeot-208.jpg')"
      }}>
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

export default PaginaPorsche

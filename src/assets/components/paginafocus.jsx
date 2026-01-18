import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./layoutcars.css"

const PaginaFocus = () => {

  const images = [
    { img: "https://i.postimg.cc/pXZfzLnd/image-s-1000x700.jpg" },
    { img: "https://i.postimg.cc/RhGW6qpk/image-s-1000x700.jpg" },
    { img: "https://i.postimg.cc/GtMp3VHR/image-s-1000x700.jpg" },
    { img: "https://frankfurt.apollo.olxcdn.com/v1/files/ryoo8j4cxau3-RO/image;s=1000x700" }
  ]

  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="pagina-masina">

      <div className="title">
        <h2>Ford Focus mk3 1.6 TDCI</h2>
        <p>Pret: 5.000€</p>
      </div>

      <div className="servicii-clienti">
        <section>
          <h3>Servicii clienti</h3>
          <p>Garantie 12 luni</p>
          <p>Verificare tehnica + test drive</p>

          <h3>Contact</h3>
          <p>0722 346 789</p>
          <p>delearauto@gmail.com</p>

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

      <div className="informatii-masina">
        <h2>Detalii masina</h2>
        <p>Brand: Ford</p>
        <p>Model: Focus</p>
        <p>Kilometraj: 190.000 km</p>
        <p>An: 2012</p>
        <p>Euro 5</p>
        <p>Motor: Diesel 1.6</p>
        <p>Putere: 95CP</p>
      </div>
      <div className="informatii-masina"> <h2>Detalii masina</h2> <p>Brand : FORD</p> <p>Model : Focus</p> <p>Kilometraj: 190.000 km</p> <p>An fabricatie: 2012</p> <p>Euro: 5</p> <p>Capacitate cil.: 1596 cm³</p> <p>Tip motor: Diesel</p> <p>Putere motor : 95 HP</p>
      </div> <section className="audio-conectivitate"> <h2>Audio si conectivitate</h2> <p>Radio DAB / AM/FM</p> <p>Porturi USB multiple (față/spate) </p> </section>
      <section className="confort-interior"> <h2>Confort și interior</h2> <ul> <li>Climatizare automată (1, 2 sau 4 zone</li> <li>Cotieră centrală față și spate</li> <li>Geamuri cu tentă sau tratament UV</li> <li>Geamuri electrice față și spate </li> </ul> </section>
      <section className="tehnologie-assistance"> <h2>Tehnologie și asistență</h2> <ul> <li>Senzori de ploaie și lumină</li> <li>Sistem Start-Stop</li> </ul> </section>
      <section className="siguranta"> <h2>Siguranță</h2> <ul> <li>Airbag-uri multiple (frontale, laterale, cortină, pentru genunchi)</li> <li>Sistem de frânare antiblocare (ABS)</li> <li>Control electronic al stabilității (ESP)</li> </ul> </section>
      <section className="perfomance"> <h2>Performanță și dinamică</h2> </section>
      <section className="estetica"> <h2>Exterior și estetică</h2> <ul> <li>Ștergătoare de parbriz cu senzori de ploaie</li> <li> Vopsea metalizată sau perlată</li> </ul> </section>

      <section className="newsletter-banner" style={{
        backgroundImage: "url('https://i.postimg.cc/zBM9Pssb/peugeot-208.jpg')"
      }}>
        <div className="newsletter-overlay"></div>
        <div className="newsletter-content">
          <h3>Abonează-te la newsletter</h3>
          <p>Primesti oferte si notificari</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email" />
            <button>Abonează-te</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PaginaFocus

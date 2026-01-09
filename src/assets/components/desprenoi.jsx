import React, { useState } from "react";
import "./desprenoi.css";

const DespreNoi = () => {
  const images = [
    {
      img: "https://i.postimg.cc/ydPMXfKw/Oficiu-de-vanzari-auto-2.webp",
      title: "Recepția Dealer Auto",
      description:
        "Primul contact cu clienții noștri, într-un spațiu modern și primitor."
    },
    {
      img: "https://i.postimg.cc/y6p5138T/Oficiu-de-vanzari-auto-3.webp",
      title: "Sala de ședință",
      description:
        "Un spațiu dedicat discuțiilor și deciziilor importante."
    },
    {
      img: "https://i.postimg.cc/WpqK4bF0/Oficiu-de-vanzari-auto-7.webp",
      title: "Biroul de vânzări",
      description:
        "Consultanță profesionistă într-un mediu modern și eficient."
    }
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="desprenoi-container">
      {/* TITLU */}
      <h3>Despre noi</h3>

      {/* DESCRIERE */}
      <p>
        Dealer Auto Ploiești este un parc auto de încredere, specializat în
        comercializarea autoturismelor second-hand atent selecționate. Activăm
        pe piața auto din România din 2017, oferind transparență,
        profesionalism și siguranță la fiecare achiziție.
        <br /><br />
        Importăm mașini din Germania, Olanda și Belgia, verificate riguros din
        punct de vedere tehnic. Stocul nostru este diversificat și actualizat
        constant, de la modele economice până la SUV-uri și autoturisme premium.
        <br /><br />
        Pentru liniștea ta, oferim garanție 12 luni pentru motor și cutia de
        viteze.
        <br />
        <strong>Dealer Auto – tu alegi mașina, noi îți oferim siguranța.</strong>
      </p>

      {/* IMAGINE PRINCIPALĂ */}
      <div className="featured-content">
        <img
          src={selectedImage.img}
          alt={selectedImage.title}
          className="featured-image"
        />
        <h2>{selectedImage.title}</h2>
        <p>{selectedImage.description}</p>
      </div>

      {/* SELECTOR IMAGINI */}
      <div className="image-selector">
        {images.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt={item.title}
            className={`thumbnail ${
              selectedImage.img === item.img ? "active" : ""
            }`}
            onClick={() => setSelectedImage(item)}
          />
        ))}
      </div>

      {/* MISIUNE & VIZIUNE */}
      <div className="cards-container">
        <div className="mission-cards">
          <h3>Misiunea noastră</h3>
          <p>
            Oferim servicii auto la cele mai înalte standarde de calitate,
            punând accent pe corectitudine și satisfacția clienților.
          </p>
        </div>

        <div className="vision-cards">
          <h3>Viziunea noastră</h3>
          <p>
            Ne dorim să devenim prima alegere pentru clienții care caută
            autoturisme de calitate în România, prin inovație și dezvoltare
            continuă.
          </p>
        </div>
      </div>

      {/* NEWSLETTER */}
      <section
        className="newsletter-banner"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/zBM9Pssb/peugeot-208.jpg')"
        }}
      >
        <div className="newsletter-overlay"></div>

        <div className="newsletter-content">
          <h3>Abonează-te la newsletter</h3>
          <p>
            Primește notificări despre cele mai noi oferte și reduceri auto.
          </p>

          <div className="newsletter-form">
            <input type="email" placeholder="Email" />
            <button type="submit">Abonează-te</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DespreNoi;

import React from "react";
import "./termeni.css";

const Termeni = () => {
  return (
    <div className="termeni-container">

      {/* BANNER */}
      <section className="termeni-banner">
        <div className="termeni-overlay"></div>
        <div className="termeni-content">
          <h3>Termeni și Condiții</h3>
        </div>
      </section>

      {/* CONȚINUT */}
      <div className="termeni-section">
        <h4>1. Acceptarea termenilor</h4>
        <p>
          Accesând site-ul Dealer Auto, confirmați că ați citit, înțeles și
          acceptat prezentele Termeni și Condiții. Dacă nu sunteți de acord,
          vă rugăm să nu utilizați platforma.
        </p>

        <h4>2. Descrierea serviciilor</h4>
        <p>
          Platforma oferă informații despre autoturisme disponibile spre
          vânzare, soluții de finanțare, date tehnice și alte servicii
          specifice domeniului auto.
        </p>

        <h4>3. Disponibilitatea produselor</h4>
        <p>
          Stocul de autoturisme poate suferi modificări fără notificare
          prealabilă. Anumite modele pot fi rezervate sau indisponibile în
          momentul solicitării.
        </p>

        <h4>4. Prețuri și oferte</h4>
        <p>
          Toate prețurile afișate sunt exprimate în euro sau lei. Ofertele
          sunt valabile în limita stocului disponibil și pot fi modificate
          fără avertisment. Prețurile pot suferi modificări în funcție de
          opțiunile de finanțare.
        </p>

        <h4>5. Informații tehnice</h4>
        <p>
          Dealer Auto depune eforturi pentru a furniza informații exacte,
          însă anumite date pot suferi erori sau pot fi preluate de la terți.
          Înainte de achiziție, recomandăm verificarea vehiculului în mod
          direct.
        </p>

        <h4>6. Finanțare și rate</h4>
        <p>
          Aprobarea unui dosar de finanțare depinde de instituțiile bancare
          partenere. Dealer Auto nu garantează obținerea creditului.
        </p>

        <h4>7. Garanții</h4>
        <p>
          Pentru anumite vehicule se oferă garanție contractuală, în funcție
          de termenii menționați la momentul achiziției.
        </p>

        <h4>8. Limitarea răspunderii</h4>
        <p>
          Dealer Auto nu poate fi tras la răspundere pentru erori
          tipografice, indisponibilitatea temporară a site-ului sau erori
          rezultate din cauze externe.
        </p>

        <h4>9. Dreptul aplicabil</h4>
        <p>
          Termenii și Condițiile sunt guvernate de legislația română. Orice
          litigiu va fi soluționat pe cale amiabilă, iar în caz contrar de
          instanțele competente din România.
        </p>

        <h4>10. Actualizarea termenilor</h4>
        <p>
          Dealer Auto își rezervă dreptul de a modifica acești Termeni și
          Condiții fără notificare prealabilă. Versiunea actualizată va fi
          disponibilă pe website.
        </p>
      </div>
    </div>
  );
};

export default Termeni;

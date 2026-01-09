import React from "react";
import "./pdc.css";

const Pdc = () => {
  return (
    <div className="pdc-container">
      {/* BANNER */}
      <section className="pdc-banner">
        <div className="pdc-banner-overlay"></div>
        <div className="pdc-banner-content">
          <h3>Politica de confidențialitate</h3>
        </div>
      </section>

      {/* CONTINUT */}
      <div className="pdc-content">
        <h4>Ce sunt datele cu caracter personal?</h4>
        <p>
          Datele cu caracter personal reprezintă orice informații privind o
          persoană fizică identificată sau identificabilă.
        </p>

        <ul>
          <li>
            <strong>Persoana vizată</strong> – persoana care poate fi identificată
            direct sau indirect.
          </li>
          <li>
            <strong>Prelucrare</strong> – orice operațiune efectuată asupra
            datelor.
          </li>
          <li>
            <strong>Operator</strong> – entitatea care stabilește scopul
            prelucrării.
          </li>
          <li>
            <strong>Destinatar</strong> – persoana căreia îi sunt divulgate datele.
          </li>
        </ul>

        <h4>Scopul colectării datelor</h4>
        <p>
          Datele sunt colectate pentru analiza preliminară în vederea obținerii
          unui credit auto, activități de marketing, reclamă și comunicare cu
          clienții.
        </p>

        <h4>Drepturile dumneavoastră</h4>
        <p>
          Conform Regulamentului (UE) 2016/679, beneficiați de dreptul la
          informare, rectificare, ștergere, restricționare, portabilitate,
          opoziție și dreptul de a depune plângere la ANSPDCP.
        </p>

        <h4>Cookie-uri</h4>
        <p>
          Cookie-urile sunt fișiere de mici dimensiuni stocate pe dispozitivul
          utilizatorului pentru a îmbunătăți experiența de navigare.
        </p>

        <h4>Administrarea cookie-urilor</h4>
        <p>
          Puteți controla sau șterge cookie-urile din setările browserului.
          Limitarea acestora poate afecta funcționalitatea site-ului.
        </p>

        <h4>Contact</h4>
        <p>
          Pentru exercitarea drepturilor, ne puteți contacta la:
          <br />
          <strong>Email:</strong> protectiadatelor@haryauto.ro
          <br />
          <strong>Adresă:</strong> Comuna Bucov, DN1B nr. 289A, jud. Prahova
        </p>
      </div>
    </div>
  );
};

export default Pdc;

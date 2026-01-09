import React from "react";
import "./qanda.css";

const Qanda = () => {
  return (
    <div className="qanda-container">
      <h1>Întrebări și răspunsuri</h1>

      <div className="faq-list">
        <div className="faq-item">
          <h3>Ce tipuri de autoturisme comercializați?</h3>
          <p>Oferim autoturisme second-hand importate din Germania, Olanda și Belgia.</p>
        </div>

        <div className="faq-item">
          <h3>Se poate cumpăra în rate?</h3>
          <p>Da. Colaborăm cu instituții financiare pentru finanțare auto.</p>
        </div>

        <div className="faq-item">
          <h3>Oferiți garanție?</h3>
          <p>Da, pentru unele vehicule oferim garanție 12 luni pentru motor și cutie.</p>
        </div>

        <div className="faq-item">
          <h3>Se pot verifica mașinile înainte de achiziție?</h3>
          <p>Da. Recomandăm verificare tehnică și test drive.</p>
        </div>
      </div>
    </div>
  );
};

export default Qanda;


import React, { useState } from "react";
import "./finantare.css";
import Footer from "./footer.jsx";

const Finantare = () => {
  const [form, setForm] = useState({
    venituri: "",
    nume: "",
    telefon: "",
    localitate: "",
    angajat3luni: "",
    istoricNegativ: "",
    masina: "",
    partener: ""

  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/finantare", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="finantare-container">
      <h2>💸 Finanțare Auto</h2>
      <p>Completează formularul pentru verificarea eligibilității</p>

      <form className="finantare-form" onSubmit={handleSubmit}>

        <label>Informații venituri</label>
        <input name="venituri" type="text" onChange={handleChange} />

        <label>Nume complet</label>
        <input name="nume" type="text" onChange={handleChange} />

        <label>Telefon</label>
        <input name="telefon" type="tel" onChange={handleChange} />

        <label>Localitate domiciliu</label>
        <input name="localitate" type="text" onChange={handleChange} />

        <label>Sunteți angajat de minim 3 luni?</label>
        <div className="check-row">
          <label><input type="radio" name="angajat3luni" value="Da" onChange={handleChange} /> Da</label>
          <label><input type="radio" name="angajat3luni" value="Nu" onChange={handleChange} /> Nu</label>
        </div>

        <label>Aveți restanțe / istoric negativ?</label>
        <div className="check-row">
          <label><input type="radio" name="istoricNegativ" value="Da" onChange={handleChange} /> Da</label>
          <label><input type="radio" name="istoricNegativ" value="Nu" onChange={handleChange} /> Nu</label>
        </div>

        <label>Mașina pentru care aplicați</label>
        <input name="masina" type="text" onChange={handleChange} />
        <label>Alege partener de finanțare</label>
        <select name="partener" onChange={handleChange}>
          <option value="">Selectează</option>
          <option value="TBI Pay">TBI Pay</option>
          <option value="Cetelem">Cetelem</option>
          <option value="BT Direct">BT Direct</option>
        </select>

        <button type="submit">📩 Trimite aplicația</button>
      </form>
      <div className="finantare-parteneri">
        <h3>Parteneri pentru finantare</h3>
        <div className="TBI-Pay">
          <img src="https://i.postimg.cc/26pKmkXc/TBI-Pay.png" alt="TBI-Pay" />
          <h3>TBI Pay</h3>
          <p>Doar 10 minute din timpul tau, cartea de identitate la indemana si mașina poate fi a ta</p>
        </div>
        <div className="Cetelem">
          <img src="https://i.postimg.cc/fLRn1Ttz/credit-online-cetelem.webp" alt="Cetelem" />
          <h3>Cetelem</h3>
          <p>Stim cat de important este timpul pentru tine, de aceea nu te punem pe drumuri, ci iti punem la dispozitie metode prin care poti aplica online sau telefonic, rapid si sigur.</p>
        </div>
        <div className="Cetelem">
          <img src="https://i.postimg.cc/1tr0VsJF/images-1.png" alt="BT Direct" />
          <h3>BT Direct</h3>
          <p>Un serviciu Banca Transilvania, BT Direct se adresează tuturor clienților care doresc să achiziționeze un autoturism în rate.</p>
        </div>
      </div>
      <section
        className="newsletter-banner"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/zBM9Pssb/peugeot-208.jpg')",
        }}
      >
        <div className="newsletter-overlay"></div>

        <div className="newsletter-content">
          <h3>Abonează-te la newsletter</h3>
          <p>
            Dacă vrei să primești notificări despre ofertele noastre,
            abonează-te aici
          </p>

          <div className="newsletter-form">
            <input type="email" placeholder="Email" />
            <button type="submit">Abonează-te</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Finantare;

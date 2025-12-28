import React, { useState } from "react";
import "./finantare.css";

const Finantare = () => {
  const [form, setForm] = useState({
    venituri: "",
    nume: "",
    telefon: "",
    localitate: "",
    angajat3luni: "",
    istoricNegativ: "",
    masina: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formular trimis:", form);
    alert("Cererea a fost trimisă! 📝");
  };

  return (
    <div className="finantare-container">
      <h2>💸 Finanțare Auto</h2>
      <p>Completează formularul pentru verificare eligibilitate</p>

      <form className="finantare-form" onSubmit={handleSubmit}>

        <label>Informații venituri</label>
        <input name="venituri" type="text" placeholder="Salariat / Pensionar / Contract UE"
          onChange={handleChange} />

        <label>Nume complet</label>
        <input name="nume" type="text" placeholder="Ex: Popescu Andrei"
          onChange={handleChange} />

        <label>Telefon</label>
        <input name="telefon" type="tel" placeholder="07xxxxxxxx"
          onChange={handleChange} />

        <label>Localitate domiciliu</label>
        <input name="localitate" type="text" placeholder="Ex: Com. Corunca, Jud. Mureș"
          onChange={handleChange} />

        <label>Sunteți angajat de minim 3 luni?</label>
        <div className="check-row">
          <label><input type="radio" name="angajat3luni" value="Da" onChange={handleChange}/> Da</label>
          <label><input type="radio" name="angajat3luni" value="Nu" onChange={handleChange}/> Nu</label>
        </div>

        <label>Aveți restanțe sau istoric negativ?</label>
        <div className="check-row">
          <label><input type="radio" name="istoricNegativ" value="Da" onChange={handleChange}/> Da</label>
          <label><input type="radio" name="istoricNegativ" value="Nu" onChange={handleChange}/> Nu</label>
        </div>

        <label>Mașina pentru care aplicați</label>
        <input name="masina" type="text" placeholder="Model mașină dorită"
          onChange={handleChange} />

        <button type="submit">Trimite aplicația</button>
      </form>
      

      
    </div>
  );
};

export default Finantare;

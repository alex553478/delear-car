import React, { useState } from "react";
import "./calculator.css";

const LeasingCalculator = () => {
  const [data, setData] = useState({
    pret: "",
    avans: "",
    dobanda: "",
    durata: "",
  });

  const [rata, setRata] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const pret = Number(data.pret);
    const avans = Number(data.avans);
    const dobanda = Number(data.dobanda) / 100 / 12; // dobanda lunara
    const durata = Number(data.durata) * 12; // luni

    const sumaFinantata = pret - avans;

    // Formula calcul rata lunară leasing (similar credit)
    const rataLunara =
      (sumaFinantata * dobanda) / (1 - Math.pow(1 + dobanda, -durata));

    setRata(rataLunara.toFixed(2));
  };

  return (
    <div className="leasing-box">
      <form className="leasing-calculator" onSubmit={handleSubmit}>
        <h2>📊 Calculator Leasing Auto</h2>
        <p>Calculează rata lunară estimativă</p>

        <label>Prețul mașinii (€)</label>
        <input type="number" name="pret" placeholder="Ex: 15000" onChange={handleChange} />

        <label>Avans (€)</label>
        <input type="number" name="avans" placeholder="Ex: 3000" onChange={handleChange} />

        <label>Dobânda anuală fixă (%)</label>
        <input type="number" name="dobanda" placeholder="Ex: 7" onChange={handleChange} />

        <label>Durata (ani)</label>
        <input type="number" name="durata" placeholder="Ex: 5" onChange={handleChange} />

        <button type="submit">Calculează rata</button>
      </form>

      {rata && (
        <div className="rezultat">
          <h3>Rata lunară estimată: <span>{rata} €</span></h3>
        </div>
      )}
    </div>
  );
};

export default LeasingCalculator;

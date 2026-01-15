import React, { useState } from "react";
import "./testdrive.css";

const TestDrive = () => {
  const [form, setForm] = useState({
    nume: "",
    telefon: "",
    email: "",
    masina: "",
    data: "",
    interval: "",
    mentiuni: ""
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMsg("Trimitem cererea...");

    const res = await fetch("http://localhost:5000/testdrive", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div className="testdrive-container">
      <h2>📅 Programează un Test Drive</h2>
      <p>Alege mașina și data preferată, iar un consultant te va contacta.</p>

      <form className="testdrive-form" onSubmit={handleSubmit}>
        
        <label>Nume complet</label>
        <input name="nume" type="text" required onChange={handleChange} />

        <label>Telefon</label>
        <input name="telefon" type="tel" required onChange={handleChange} />

        <label>Email (opțional)</label>
        <input name="email" type="email" onChange={handleChange} />

        <label>Model mașină</label>
        <input name="masina" type="text" required placeholder="ex: BMW X5" onChange={handleChange} />

        <label>Data test drive</label>
        <input name="data" type="date" required onChange={handleChange} />

        <label>Interval orar preferat</label>
        <select name="interval" required onChange={handleChange}>
          <option value="">Selectează interval</option>
          <option value="09:00-12:00">Dimineața (09:00-12:00)</option>
          <option value="12:00-17:00">După-amiaza (12:00-17:00)</option>
          <option value="17:00-19:00">Seara (17:00-19:00)</option>
        </select>

        <label>Mențiuni suplimentare (opțional)</label>
        <textarea
          name="mentiuni"
          placeholder="Preferințe / cereri speciale"
          onChange={handleChange}
        />

        <button type="submit">🚗 Trimite cererea</button>
      </form>

      {msg && <p className="testdrive-msg">{msg}</p>}
    </div>
  );
};

export default TestDrive;

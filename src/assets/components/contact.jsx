import React, { useState } from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa6";
import "./contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    nume: "",
    email: "",
    subiect: "",
    mesaj: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);

      setForm({ nume: "", email: "", subiect: "", mesaj: "" });

    } catch (err) {
      console.error(err);
      alert("Eroare la trimitere!");
    }
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>📞 Telefon: 0722 346 789</p>
      <p>📧 Email: delearauto@gmail.com</p>
      <p>📍 Adresa: Str. Exemplu nr. 123, Ploiești</p>

      <div className="sugestii-formular">
        <h2>Sugestii</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nume"
            placeholder="Nume"
            value={form.nume}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subiect"
            placeholder="Subiect"
            value={form.subiect}
            onChange={handleChange}
            required
          />

          <textarea
            name="mesaj"
            placeholder="Mesaj"
            value={form.mesaj}
            onChange={handleChange}
            required
          />

          <button type="submit">Trimite</button>
        </form>

        <div className="social-media">
          <FaFacebook />
          <FaTiktok />
        </div>
      </div>
    </div>
  );
};

export default Contact;

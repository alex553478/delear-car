import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-overlay"></div>
      
      <div className="banner-content">
        <h1>Dealer Auto România</h1>
        <p>Mașina ta preferată te așteaptă 🚗💨</p>
        <p>Peste 300 masini in stoc !</p>
        <p>Tu alegi mașina, noi o finanțăm.</p>
        <button>Vezi Ofertele</button>
      </div>
    </section>
  );
};

export default Banner;

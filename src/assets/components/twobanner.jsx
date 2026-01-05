import React from 'react'
import "./twobanner.css"
import { Link } from "react-router-dom";

const Twobanner = () => {
  return (
    <section className="another-banner">
      <div className="another-banner-overlay"></div>

      <div className="another-banner-content">
        <h1>Vino la parcul auto din Ploiești să-ți alegi mașina potrivită!</h1>
        <p>Vino sa vezi personal toate mașinile disponibile în stoc!</p>
        <p>Aici vei gasi mașini de toate tipurile și prețuri accesibile!</p>
        <p>Indiferent că alegi un SUV, un sedan premium sau o mașină economică, ai garanția calității și a transparenței totale.</p>
        <Link to="/contact">
          <button>Contacteaza-ne</button>
        </Link>
      </div>
    </section>
  )
}

export default Twobanner;

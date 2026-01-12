import React from "react";
import "./profil.css";

const Profil = ({ userData, logoutUser }) => {
  return (
    <div className="profil-page">
      <h2>Bun venit, {userData.name} 👋</h2>

      <div className="profil-info">
        <p><strong>Nume:</strong> {userData.name}</p>
        <p><strong>Telefon:</strong> {userData.phone || "Necompletat"}</p>
        <p><strong>Email:</strong> {userData.email || "Necompletat"}</p>
        <p><strong>Adresa:</strong> {userData.adresa || "Necompletat"}</p>
        <p><strong>Oraș:</strong> {userData.oras || "Necompletat"}</p>
        <p><strong>Județ:</strong> {userData.judet || "Necompletat"}</p>

        {userData.iban && (
          <p><strong>IBAN:</strong> {userData.iban}</p>
        )}

        <p><strong>Username:</strong> {userData.username}</p>
        <p><strong>ID Cont:</strong> #{userData.id}</p>
      </div>

      <button onClick={logoutUser} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default Profil;

import React, { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdAccountBox } from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { logged, userData, logoutUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <h2 className="tittle">Dealer Auto</h2>

      <div className="nav-links">
        <Link to="/" className="icon-item">
          <FaHome /> Home
        </Link>

        <Link to="/masini" className="icon-item">
          Mașini de vânzare
        </Link>

        <Link to="/finantare" className="icon-item">
          Finanțare
        </Link>

        <Link to="/contact" className="icon-item">
          Contact
        </Link>
        <Link to="/calculator" className="icon-item">
          Calculator Rate
        </Link>
        

        <Link to="/contulmeu" className="icon-item account-link">
          <MdAccountBox />
          {logged ? `👋 ${userData.name}` : "Contul meu"}
        </Link>

        {/* 🔥 AICI APARE LOGOUT DOAR DACĂ ESTE LOGAT */}
        {logged && (
          <button className="logout-btn" onClick={logoutUser}>
            🚪 Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

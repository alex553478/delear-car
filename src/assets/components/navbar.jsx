import React, { useContext } from 'react'
import './navbar.css'
import { MdAccountBox, MdFavorite } from "react-icons/md";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext.jsx";

const Navbar = () => {
  const { logged, userData, logoutUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <h2>Dealer Auto</h2>

      <input type="text" placeholder="Search car..." />
      <button>Search</button>

      <div className="nav-links">

        <Link to="/" className="icon-item">
          <FaHome /> Home
        </Link>

        <Link to="/contulmeu" className="icon-item">
          <MdAccountBox />
          {!logged ? "Contul meu" : `👋 ${userData.name}`}
        </Link>

        <Link to="/favorite" className="icon-item">
          <MdFavorite /> Favorite
        </Link>

        <Link to="/cart" className="icon-item">
          <FaShoppingCart /> Coșul
        </Link>

        <Link to="/dealeri" className="icon-item">
          <FaLocationPin /> Dealeri
        </Link>

        {logged && (
          <button className="logout-btn" onClick={logoutUser}>
            🚪 Logout
          </button>
        )}

      </div>
    </div>
  )
}

export default Navbar


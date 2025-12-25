import React, { useContext } from 'react'
import './navbar.css'
import { MdAccountBox, MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext.jsx";




const Navbar = () => {
  const { logged, userData, logoutUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <h2>Delear auto</h2>
      <input type="text" placeholder="Search car..." />
      <button>Search</button>

      <div className="nav-links">

        <div className="Profile-icon">
          <MdAccountBox />
          {!logged ? (
            <Link to="/contulmeu">Contul meu</Link>
          ) : (
            <Link to="/contulmeu">👋 {userData.username}</Link>
          )}
        </div>

        <div className="Favorite-icon"><MdFavorite /><Link to="/favorite">Favorite</Link></div>
        <div className="Cosul-icon"><FaShoppingCart /><Link to="/cart">Cosul</Link></div>
        <div className="location-icon"><FaLocationPin /><Link to="/dealeri">Dealeri</Link></div>

        {logged && (
          <button className="logout-btn" onClick={logoutUser}>🚪 Logout</button>
        )}

      </div>
    </div>
  )
}
export default Navbar

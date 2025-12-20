import React from 'react'
import './navbar.css'
import { MdAccountBox } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const navbar = () => {
  return (
    <div>
        <div className="navbar">
            <h2>Delear auto</h2>
            <input type="text" placeholder="Search car..." />
            <button>Search</button>
            <div className="nav-links">
                <div className="Profile-icon">
                    <MdAccountBox />
                    <span>Profile</span>
                </div>
                <div className="Favorite-icon">
                    <MdFavorite />
                    <span>Favortie</span>

                </div>
                <div className="Cosul-icon">
                    <FaShoppingCart />
                    <span>Cosul</span>

                </div>
                <div className="locatipn-icon">
                    <FaLocationPin />
                    <span>Dealeri</span>
                </div>

                
                
            </div>
        </div>
    </div>
  )
}

export default navbar
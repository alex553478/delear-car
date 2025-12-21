import React from 'react'
import './navbar.css'
import { MdAccountBox } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { Link } from 'react-router-dom';

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
                    <a href='/contulmeu'>Contul meu</a>
                </div>
                <div className="Favorite-icon">
                    <MdFavorite />
                    <a href='/favorite'>Favorite</a>
                </div>
                <div className="Cosul-icon">
                    <FaShoppingCart />
                    <a href='/cart'>Cosul</a>
                </div>
                <div className="location-icon">
                    <FaLocationPin />
                    <a href='/dealeri'>Dealeri</a>
                </div>

                
                
            </div>
        </div>
    </div>
  )
}

export default navbar
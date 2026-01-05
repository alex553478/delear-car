import React from 'react'
import "./footer.css"
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-col">
                <h2 className="footer-logo">Dealer Auto</h2>
                <p>@2025 Dealer Auto. Toate drepturile rezervate.</p>

                <h3>Contactează-ne:</h3>
                <p>📞 Telefon: 0722 346 789</p>
                <p>📩 Email: delearauto@gmail.com</p>
                <p>📍 Adresa: Str. Exemplu nr 123, Ploiești</p>

                <div className="social-media">
                    <FaFacebookF />
                    <FaTiktok />
                </div>
            </div>

            <div className="footer-col">
                <h3>Link-uri utile</h3>
                <ul>
                    <li>Despre noi</li>
                    <li>Politica de confidențialitate</li>
                    <li>Termeni și condiții</li>
                    <li>Ajutor</li>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;


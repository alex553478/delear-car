import React from 'react'
import './contulmeu.css'

const Contulmeu = () => {
  return (
    <div className="page-auth">

      <div className="auth-card">

        {/* LOGIN */}
        <div className="auth-section">
          <h1>Contul meu</h1>
          <p>User-ul tau</p>

          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Logare</button>

          <p className="switch-text">
            Daca nu ai un cont poti sa te inscrii. <span>Aici!</span>
          </p>
        </div>

        {/* REGISTER */}
        <div className="auth-section">
          <h1>Inregistrare</h1>

          <input type="text" placeholder="Nume complet" />
          <input type="number" placeholder="Phone number" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm password" />
          <button>Inregistrare</button>
        </div>

      </div>

    </div>
  )
}

export default Contulmeu

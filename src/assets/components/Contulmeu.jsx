import React from 'react'
import './contulmeu.css'

const Contulmeu = () => {
  return (
    <div>
        <div className="contulmeu">
            <h1>Contul meu</h1>
            <p>User-ul tau</p>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Logare</button>
            <br></br>
            <p>Daca nu ai un cont poti sa te inscrii. Aici!</p>
            <h1>Inregistrare</h1>
            <input type="text" placeholder="Nume complet" />
            <input type="number" placeholder="Phone number" />
            <input type="text" placeholder="Usernmame" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm password" />
            <button>Inregistrare</button>
        </div>
    </div>
  )
}

export default Contulmeu
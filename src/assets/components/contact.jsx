import React from 'react'
import { FaFacebook, FaTiktok } from 'react-icons/fa6'
import "./contact.css"



const contact = () => {
    const [sugestii, setSugestii] = React.useState([]);
    const habdleSubmit = (e) => {
        e.preventDefault ();
        setSugestii([...sugestii, e.target.value]);
        const res = fetch("http://localhost:5000//sugestii", {
            method: "POST",
            headers: { "Content-Type": "aplication/json" },
            body: JSON.stringify(sugestii),

        })
        const data = await.res.json();
        alert(data.message);
        
    }



    
  return (
    <div className="contact">
        <h1>Contact</h1>
        <p>Telefon: 0722 346 789</p>
        <p>Email: delearauto@gmail.com</p>
        <p>Adresa: Str. Exemplu nr 123, Ploiești</p>
        <div className="sugestii-formular" onSubmit={handleSubmit}>
            <h2>Sugestii</h2>
            <form>
                <input type="text" placeholder="Nune" onSubmit={handleSubmit} />
                <input type="email" placeholder="Email" onSubmit={handleSubmit} />
                <input type="text" placeholder="Subiect" onSubmit={handleSubmit} />
                <textarea placeholder="Mesaj"></textarea>
                <button type="submit">Trimite</button>


            </form>
            <div className="social-media">
                <FaFacebook />
                <FaTiktok />
                
            </div>
        </div>
       
    </div>
  )
}

export default contact

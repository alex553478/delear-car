import React, { useEffect, useRef, useState, useContext } from 'react'
import './contulmeu.css'
import { AuthContext } from "../../context/AuthContext.jsx";



const Contulmeu = () => {
  const inputRef = useRef(null)
  const { loginUser, logoutUser, logged, userData } = useContext(AuthContext)

  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginMsg, setLoginMsg] = useState('')

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [regUsername, setRegUsername] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [regMsg, setRegMsg] = useState('')

  useEffect(() => inputRef.current.focus(), [])

  const handleLogin = async () => {
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ username: loginUsername, password: loginPassword })
    })
    const data = await res.json()
    setLoginMsg(data.message)
    if(res.ok) loginUser(data.user)
  }

  const handleRegister = async () => {
    const res = await fetch('http://localhost:5000/register', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ name, phone, username:regUsername, password:regPassword, confirmPassword })
    })
    const data = await res.json()
    setRegMsg(data.message)
  }

  return (
    
  <div className="account-page">
      
    {!logged ? (
      <div className="forms-wrapper">

        {/* LOGIN */}
        <div className="form-card">
          <h2>Autentificare</h2>
          <input
            ref={inputRef}
            type="text"
            placeholder="Username"
            value={loginUsername}
            onChange={(e)=>setLoginUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Parola"
            value={loginPassword}
            onChange={(e)=>setLoginPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Logare</button>
          <p className="msg">{loginMsg}</p>
        </div>

        {/* REGISTER */}
        <div className="form-card">
          <h2>Creare cont</h2>
          <input type="text" placeholder="Nume" value={name} onChange={e=>setName(e.target.value)} />
          <input type="number" placeholder="Telefon" value={phone} onChange={e=>setPhone(e.target.value)} />
          <input type="text" placeholder="Username" value={regUsername} onChange={e=>setRegUsername(e.target.value)} />
          <input type="password" placeholder="Parola" value={regPassword} onChange={e=>setRegPassword(e.target.value)} />
          <input type="password" placeholder="Confirma parola" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} />
          <button onClick={handleRegister}>Creează Cont</button>
          <p className="msg">{regMsg}</p>
        </div>

      </div>
    ) : (
      <div className="logged-in">
        <h2>Bun venit, <span>{userData.name}</span> 👋</h2>
        <p><strong>Username:</strong> {userData.username}</p>
        <p><strong>ID Cont:</strong> #{userData.id}</p>
        <button className="logout-btn" onClick={logoutUser}>Logout</button>
      </div>
    )}

  </div>
);

  
}

export default Contulmeu


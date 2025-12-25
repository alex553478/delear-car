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
    <div className="page-auth">
      <div className="auth-card">

        {!logged ? (
          <div className="auth-section">
            <h1>Contul meu</h1>

            <input ref={inputRef} type="text" placeholder="Username" value={loginUsername} onChange={e=>setLoginUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={loginPassword} onChange={e=>setLoginPassword(e.target.value)} />
            <button onClick={handleLogin}>Logare</button>
            <p>{loginMsg}</p>

            <h2>Inregistrare</h2>
            <input type="text" placeholder="Nume" value={name} onChange={e=>setName(e.target.value)} />
            <input type="number" placeholder="Telefon" value={phone} onChange={e=>setPhone(e.target.value)} />
            <input type="text" placeholder="Username" value={regUsername} onChange={e=>setRegUsername(e.target.value)} />
            <input type="password" placeholder="Parola" value={regPassword} onChange={e=>setRegPassword(e.target.value)} />
            <input type="password" placeholder="Confirma parola" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} />
            <button onClick={handleRegister}>Creează Cont</button>
            <p>{regMsg}</p>
          </div>
        ) : (
          <div className="auth-section">
            <h1>Bun venit, {userData.name} 👋</h1>
            <p>User: {userData.username}</p>
            <p>ID Cont: #{userData.id}</p>
            <button onClick={logoutUser}>Logout</button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Contulmeu


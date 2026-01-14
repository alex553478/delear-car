import React, { useEffect, useRef, useState, useContext } from 'react'
import './contulmeu.css'
import { AuthContext } from "../../context/AuthContext.jsx";

const Contulmeu = () => {
  const inputRef = useRef(null)
  const { loginUser, updateUser, logoutUser, logged, userData } = useContext(AuthContext)

  // LOGIN
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginMsg, setLoginMsg] = useState('')

  // REGISTER
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [regUsername, setRegUsername] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [regMsg, setRegMsg] = useState('')

  // PROFIL
  const [profil, setProfil] = useState({
    name: "",
    phone: "",
    email: "",
    adresa: "",
    oras: "",
    judet: "",
    iban: ""
  })
  const [updateMsg, setUpdateMsg] = useState("")

  useEffect(() => inputRef.current?.focus(), [])

  // populate profil pe login
  useEffect(() => {
    if (userData) {
      setProfil({
        name: userData.name || "",
        phone: userData.phone || "",
        email: userData.email || "",
        adresa: userData.adresa || "",
        oras: userData.oras || "",
        judet: userData.judet || "",
        iban: userData.iban || ""
      })
    }
  }, [userData])

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
      body: JSON.stringify({
        name, phone, username: regUsername,
        password: regPassword, confirmPassword
      })
    })
    const data = await res.json()
    setRegMsg(data.message)
  }

  const handleProfilChange = (e) => {
    setProfil({ ...profil, [e.target.name]: e.target.value })
  }

  const handleProfilUpdate = async () => {
    const res = await fetch("http://localhost:5000/update-profile", {
      method: "PUT",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ id: userData.id, ...profil })
    })

    const data = await res.json()
    setUpdateMsg(data.message)

    if(res.ok && data.user) updateUser(data.user)
  }

  const handleProfilDelete = async () => {
    if (!window.confirm("Sigur vrei să ștergi contul?")) return;

    const res = await fetch("http://localhost:5000/delete-profile", {
      method: "DELETE",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ id: userData.id })
    })

    const data = await res.json()
    alert(data.message)

    logoutUser()
  }

  return (
    <div className="account-page">

      {!logged ? (
        <div className="forms-wrapper">

          {/* LOGIN */}
          <div className="form-card">
            <h2>Autentificare</h2>
            <input ref={inputRef} type="text" placeholder="Username" value={loginUsername}
              onChange={(e)=>setLoginUsername(e.target.value)} />
            <input type="password" placeholder="Parola" value={loginPassword}
              onChange={(e)=>setLoginPassword(e.target.value)} />
            <button onClick={handleLogin}>Logare</button>
            <p className="msg">{loginMsg}</p>
          </div>

          {/* REGISTER */}
          <div className="form-card">
            <h2>Creare cont</h2>
            <input placeholder="Nume" onChange={e=>setName(e.target.value)} />
            <input placeholder="Telefon" onChange={e=>setPhone(e.target.value)} />
            <input placeholder="Username" onChange={e=>setRegUsername(e.target.value)} />
            <input type="password" placeholder="Parola" onChange={e=>setRegPassword(e.target.value)} />
            <input type="password" placeholder="Confirmă parola" onChange={e=>setConfirmPassword(e.target.value)} />
            <button onClick={handleRegister}>Creează cont</button>
            <p className="msg">{regMsg}</p>
          </div>

        </div>
      ) : (
        <div className="logged-in">

          <h2>Bun venit, {profil.name} 👋</h2>
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>ID Cont:</strong> #{userData.id}</p>

          <div className="profil-info">
            <label>Nume</label>
            <input name="name" value={profil.name} onChange={handleProfilChange} />

            <label>Telefon</label>
            <input name="phone" value={profil.phone} onChange={handleProfilChange} />

            <label>Email</label>
            <input name="email" value={profil.email} onChange={handleProfilChange} />

            <label>Adresa</label>
            <input name="adresa" value={profil.adresa} onChange={handleProfilChange} />

            <label>Oraș</label>
            <input name="oras" value={profil.oras} onChange={handleProfilChange} />

            <label>Județ</label>
            <input name="judet" value={profil.judet} onChange={handleProfilChange} />

            <label>IBAN (opțional)</label>
            <input name="iban" value={profil.iban} onChange={handleProfilChange} />

            <button className="save-btn" onClick={handleProfilUpdate}>Salvează modificările</button>
            <p className="msg">{updateMsg}</p>
          </div>

          <button className="delete-btn" onClick={handleProfilDelete}>Șterge profilul 🗑</button>
          <button className="logout-btn" onClick={logoutUser}>Logout</button>
        </div>
      )}
    </div>
  )
}

export default Contulmeu

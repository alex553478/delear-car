import { useState } from 'react'

export default function Contulmeu() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const register = async () => {
    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })

      const data = await res.json()
      setMsg(data.message)
    } catch (e) {
      console.error(e)
      setMsg('Eroare server')
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Inregistrare</h1>

      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={register}>Inregistrare</button>

      <p>{msg}</p>
    </div>
  )
}

const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(cors({ origin: '*' }))
app.use(express.json())

const USERS_FILE = './users.json'

// asigură fișierul
if (!fs.existsSync(USERS_FILE)) {
  fs.writeFileSync(USERS_FILE, '[]')
}

// TEST
app.get('/ping', (req, res) => {
  res.json({ ok: true })
})

// REGISTER
app.post('/register', (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res.status(400).json({ message: 'Date lipsă' })
  }

  const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'))

  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'User existent' })
  }

  users.push({ username, password })
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2))

  res.json({ message: 'Înregistrare reușită ✅' })
})

// LOGIN
app.post('/login', (req, res) => {
  const { username, password } = req.body
  const users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'))

  const ok = users.find(u => u.username === username && u.password === password)
  if (!ok) return res.status(401).json({ message: 'Date greșite' })

  res.json({ message: 'Login OK' })
})

app.listen(5000, () => {
  console.log('✅ Backend pornit pe http://localhost:5000')
})

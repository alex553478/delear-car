const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(cors())
app.use(express.json())

const USERS_FILE = './users.json'

if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, '[]')

// Helper funcții
const readUsers = () => JSON.parse(fs.readFileSync(USERS_FILE))
const saveUsers = (data) => fs.writeFileSync(USERS_FILE, JSON.stringify(data, null, 2))

// REGISTER
app.post('/register', (req, res) => {
  console.log("📩 Date primite:", req.body)

  const { name, phone, username, password, confirmPassword } = req.body
  if (!name || !phone || !username || !password || !confirmPassword)
    return res.status(400).json({ message: "Completează toate câmpurile" })

  if (password !== confirmPassword)
    return res.status(400).json({ message: "Parolele nu coincid" })

  const users = readUsers()

  if (users.find(u => u.username === username))
    return res.status(409).json({ message: "Username deja folosit" })

  const newUser = {
    id: users.length + 1,
    name,
    phone,
    username,
    password
  }

  users.push(newUser)
  saveUsers(users)
  res.json({ message: "Înregistrare reușită", user: newUser })
})

// LOGIN
app.post('/login', (req, res) => {
  const { username, password } = req.body
  const users = readUsers()
  const user = users.find(u => u.username === username)

  if (!user) return res.status(404).json({ message: "Userul nu există" })
  if (user.password !== password) return res.status(401).json({ message: "Parola greșită" })

  res.json({ message: "Login reușit", user })
})

app.listen(5000, () => {
  console.log("🚀 Server pornit pe http://localhost:5000")
})

const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(cors({ origin: '*' }))
app.use(express.json())

const USERS_FILE = './users.json'
if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, '[]')

// FOLOSIM FISIERUL PT STORING
const readUsers = () => JSON.parse(fs.readFileSync(USERS_FILE))
const saveUsers = (data) => fs.writeFileSync(USERS_FILE, JSON.stringify(data, null, 2))

// REGISTER
app.post('/register', (req, res) => {
  const { name, phone, username, password, confirmPassword } = req.body

  if (!name || !phone || !username || !password || !confirmPassword)
    return res.status(400).json({ message: "Completează toate câmpurile" })

  if (password !== confirmPassword)
    return res.status(400).json({ message: "Parolele nu coincid" })

  const users = readUsers()
  if (users.find(u => u.username === username))
    return res.status(409).json({ message: "Username deja folosit" })

  const id = users.length ? users[users.length - 1].id + 1 : 1
  users.push({ id, name, phone, username, password })
  saveUsers(users)
  res.json({ message: "Înregistrare reușită ✅" })
})

// LOGIN
app.post('/login', (req, res) => {
  const { username, password } = req.body
  const users = readUsers()
  const user = users.find(u => u.username === username)

  if (!user) return res.status(404).json({ message: "User inexistent" })
  if (user.password !== password) return res.status(401).json({ message: "Parola greșită" })

  res.json({
    message: "Login reușit",
    user: {
      id: user.id,
      name: user.name,
      username: user.username
    }
  })
})

app.listen(5000, () => console.log("🚀 Server pornit pe http://localhost:5000"))

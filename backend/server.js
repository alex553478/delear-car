const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

/* =======================
   USERS (REGISTER / LOGIN)
======================= */

const USERS_FILE = "./users.json";
if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, "[]");

const readUsers = () =>
  JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));

const saveUsers = (data) =>
  fs.writeFileSync(USERS_FILE, JSON.stringify(data, null, 2));

// REGISTER
app.post("/register", (req, res) => {
  const { name, phone, username, password, confirmPassword } = req.body;

  if (!name || !phone || !username || !password || !confirmPassword)
    return res.status(400).json({ message: "Completează toate câmpurile" });

  if (password !== confirmPassword)
    return res.status(400).json({ message: "Parolele nu coincid" });

  const users = readUsers();
  if (users.find((u) => u.username === username))
    return res.status(409).json({ message: "Username deja folosit" });

  const newUser = {
    id: users.length + 1,
    name,
    phone,
    username,
    password,
    email: "",
    adresa: "",
    oras: "",
    judet: "",
    iban: ""
  };

  users.push(newUser);
  saveUsers(users);

  res.json({ message: "Înregistrare reușită ✅", user: newUser });
});

// LOGIN
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const users = readUsers();
  const user = users.find((u) => u.username === username);

  if (!user) return res.status(404).json({ message: "User inexistent" });
  if (user.password !== password)
    return res.status(401).json({ message: "Parolă greșită" });

  // trimitem user-ul complet ca să avem toate câmpurile în profil
  res.json({
    message: "Login reușit",
    user
  });
});

/* =======================
   PROFIL (UPDATE / DELETE)
======================= */

// UPDATE PROFIL
app.put("/update-profile", (req, res) => {
  const users = readUsers();
  const { id, ...rest } = req.body;

  const index = users.findIndex((u) => u.id === id);
  if (index === -1)
    return res.status(404).json({ message: "User negăsit" });

  users[index] = {
    ...users[index],
    ...rest
  };

  saveUsers(users);

  res.json({
    message: "Profil actualizat ✔",
    user: users[index]
  });
});

// ALIAS ca să nu mai iei 404 dacă ai rămas cu /update-user pe undeva
app.put("/update-user", (req, res) => {
  const users = readUsers();
  const { id, ...rest } = req.body;

  const index = users.findIndex((u) => u.id === id);
  if (index === -1)
    return res.status(404).json({ message: "User negăsit" });

  users[index] = {
    ...users[index],
    ...rest
  };

  saveUsers(users);

  res.json({
    message: "Profil actualizat ✔",
    user: users[index]
  });
});

// DELETE PROFIL (șterge contul)
app.delete("/delete-profile", (req, res) => {
  const users = readUsers();
  const { id } = req.body;

  const filtered = users.filter((u) => u.id !== id);
  saveUsers(filtered);

  res.json({ message: "Profil șters definitiv 🗑" });
});

/* =======================
   FINANȚARE
======================= */

const FINANTARE_FILE = "./finantare.json";
if (!fs.existsSync(FINANTARE_FILE)) fs.writeFileSync(FINANTARE_FILE, "[]");

const readFinantari = () =>
  JSON.parse(fs.readFileSync(FINANTARE_FILE, "utf8"));

const saveFinantari = (data) =>
  fs.writeFileSync(FINANTARE_FILE, JSON.stringify(data, null, 2));

app.post("/finantare", (req, res) => {
  const {
    venituri,
    nume,
    telefon,
    localitate,
    angajat3luni,
    istoricNegativ,
    masina,
    partener
  } = req.body;

  if (!nume || !telefon || !masina)
    return res.status(400).json({ message: "Completează câmpurile obligatorii" });

  const finantari = readFinantari();

  const newFinantare = {
    id: finantari.length + 1,
    venituri,
    nume,
    telefon,
    localitate,
    angajat3luni,
    istoricNegativ,
    masina,
    partener: partener || null,
    data: new Date().toISOString(),
  };

  finantari.push(newFinantare);
  saveFinantari(finantari);

  res.json({ message: "Cererea de finanțare a fost salvată 💸" });
});

/* =======================
   SUGESTII / CONTACT
======================= */

const SUGESTII_FILE = "./sugestii.json";
if (!fs.existsSync(SUGESTII_FILE)) fs.writeFileSync(SUGESTII_FILE, "[]");

const readSugestii = () =>
  JSON.parse(fs.readFileSync(SUGESTII_FILE, "utf8"));

const saveSugestii = (data) =>
  fs.writeFileSync(SUGESTII_FILE, JSON.stringify(data, null, 2));

app.post("/sugestii", (req, res) => {
  const { nume, email, subiect, mesaj } = req.body;

  if (!nume || !email || !mesaj)
    return res
      .status(400)
      .json({ message: "Completează câmpurile obligatorii" });

  const sugestii = readSugestii();

  const newSugestie = {
    id: sugestii.length + 1,
    nume,
    email,
    subiect,
    mesaj,
    data: new Date().toISOString(),
  };

  sugestii.push(newSugestie);
  saveSugestii(sugestii);

  res.json({ message: "Sugestia a fost salvată 📩" });
});

/* =======================
   PORNIRE SERVER
======================= */

app.listen(5000, () =>
  console.log("🚀 Server pornit pe http://localhost:5000")
);

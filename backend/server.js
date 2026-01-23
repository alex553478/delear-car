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
   FINANȚARE CU SCORING
======================= */

const FINANTARE_FILE = "./finantare.json";
if (!fs.existsSync(FINANTARE_FILE)) fs.writeFileSync(FINANTARE_FILE, "[]");

const readFinantari = () =>
  JSON.parse(fs.readFileSync(FINANTARE_FILE, "utf8"));

const saveFinantari = (data) =>
  fs.writeFileSync(FINANTARE_FILE, JSON.stringify(data, null, 2));

// robot de scoring bancar
function scorBancar(data) {
  let score = 0;
  const venit = parseInt(data.venituri) || 0;
  const pret = parseInt(data.pretMasina) || 0;

  // Venit
  if (venit < 2200) score -= 3;
  else if (venit < 3000) score += 0;
  else if (venit < 4500) score += 2;
  else score += 4;

  // Stabilitate job
  if (data.angajat3luni === "Da") score += 2;
  else score -= 2;

  // Istoric negativ
  if (data.istoricNegativ === "Nu") score += 3;
  else score -= 4;

  // Partener finanțare
  if (data.partener === "BT Direct") score += 2;
  if (data.partener === "TBI Pay") score += 1;
  // Cetelem rămâne 0

  // Raport preț / venit (cam ca grad de îndatorare)
  if (pret > 0 && venit > 0) {
    const multiplu = pret / venit;
    if (multiplu <= 6) score += 3;
    else if (multiplu <= 10) score += 1;
    else score -= 3;
  }

  return score;
}

function decizieFinala(score) {
  if (score >= 6) return "aprobat";
  if (score >= 3) return "analiza";
  return "respins";
}

// trimite cererea + scor + status
app.post("/finantare", (req, res) => {
  const {
    venituri,
    nume,
    telefon,
    localitate,
    angajat3luni,
    istoricNegativ,
    masina,
    partener,
    pretMasina
  } = req.body;

  if (!nume || !telefon || !masina)
    return res.status(400).json({ message: "Completează câmpurile obligatorii" });

  const finantari = readFinantari();

  const scoringData = {
    venituri,
    nume,
    telefon,
    localitate,
    angajat3luni,
    istoricNegativ,
    masina,
    partener,
    pretMasina
  };

  const score = scorBancar(scoringData);
  const status = decizieFinala(score);

  const newFinantare = {
    id: finantari.length + 1,
    ...scoringData,
    score,
    status,
    dataCerere: new Date().toISOString()
  };

  finantari.push(newFinantare);
  saveFinantari(finantari);

  res.json({
    message:
      status === "aprobat"
        ? "Cererea a fost aprobată automat ✔"
        : status === "respins"
          ? "Cererea a fost respinsă automat ❌"
          : "Cererea este trimisă spre analiză 📋",
    status,
    score
  });
});

// LISTĂ pentru panel admin
app.get("/finantari", (req, res) => {
  const finantari = readFinantari();
  res.json(finantari);
});

// UPDATE STATUS manual din panel admin
app.put("/finantari/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const finantari = readFinantari();
  const index = finantari.findIndex(f => f.id === Number(id));

  if (index === -1)
    return res.status(404).json({ message: "Cerere negăsită" });

  finantari[index].status = status;
  saveFinantari(finantari);

  res.json({
    message: `Status actualizat la ${status}`,
    cerere: finantari[index]
  });
});
/* =======================
   TEST DRIVE
======================= */

const TESTDRIVE_FILE = "./testdrive.json";
if (!fs.existsSync(TESTDRIVE_FILE)) fs.writeFileSync(TESTDRIVE_FILE, "[]");

const readTestdrive = () =>
  JSON.parse(fs.readFileSync(TESTDRIVE_FILE, "utf8"));

const saveTestdrive = (data) =>
  fs.writeFileSync(TESTDRIVE_FILE, JSON.stringify(data, null, 2));
app.post("/testdrive", (req, res) => {
  const { nume, telefon, email, masina, data, interval, mentiuni } = req.body;

  if (!nume || !telefon || !masina || !data || !interval) {
    return res
      .status(400)
      .json({ message: "Completează câmpurile obligatorii" });
  }

  const cereri = readTestdrive();

  const newCerere = {
    id: cereri.length + 1,
    nume,
    telefon,
    email: email || "",
    masina,
    data,
    interval,
    mentiuni: mentiuni || "",
    status: "in_asteptare",
    createdAt: new Date().toISOString()
  };

  cereri.push(newCerere);
  saveTestdrive(cereri);

  res.json({
    message: "Cererea ta de test drive a fost trimisă. Te vom contacta pentru confirmare 📞",
    cerere: newCerere
  });
});


/* =======================
   SUGESTII / CONTACT FIX
======================= */

const SUGESTII_FILE = "./sugestii.json";
if (!fs.existsSync(SUGESTII_FILE)) fs.writeFileSync(SUGESTII_FILE, "[]");

const readSugestii = () => JSON.parse(fs.readFileSync(SUGESTII_FILE, "utf8"));
const saveSugestii = (data) => fs.writeFileSync(SUGESTII_FILE, JSON.stringify(data, null, 2));

app.post("/sugestii", (req, res) => {
  let { nume, email, subiect, mesaj } = req.body;

  nume = (nume || "").trim();
  email = (email || "").trim();
  subiect = (subiect || "").trim();
  mesaj = (mesaj || "").trim();

  if (!nume) return res.status(400).json({ message: "Numele este obligatoriu" });
  if (!email) return res.status(400).json({ message: "Email obligatoriu" });

  if (!mesaj) mesaj = "(Mesaj gol)";

  const sugestii = readSugestii();

  const newSugestie = {
    id: sugestii.length + 1,
    nume,
    email,
    subiect: subiect || "Fără subiect",
    mesaj,
    data: new Date().toISOString(),
  };

  sugestii.push(newSugestie);
  saveSugestii(sugestii);

  return res.json({
    message: "Sugestia a fost trimisă cu succes 📩",
    sugestie: newSugestie
  });
});


/* =======================
   PORNIRE SERVER
======================= */

app.listen(5000, () =>
  console.log("🚀 Server pornit pe http://localhost:5000")
);

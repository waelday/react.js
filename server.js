/**
    * @description      : 
    * @author           : waeld
    * @group            : 
    * @created          : 18/05/2025 - 00:00:03
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/05/2025
    * - Author          : waeld
    * - Modification    : 
**/
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(express.json());

// 🔌 Connexion MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'gestion'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Erreur de connexion à MySQL:', err);
    return;
  }
  console.log('✅ Connecté à la base MySQL "gestion"');
});

// 🔐 Inscription
app.post('/api/signup', (req, res) => {
  const { nom, email, password, role } = req.body;

  if (!nom || !email || !password || !role) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  const sql = `INSERT INTO utilisateur (nom, email, password, role) VALUES (?, ?, ?, ?)`;

  db.query(sql, [nom, email, password, role], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ error: 'Email déjà utilisé.' });
      }
      return res.status(500).json({ error: 'Erreur lors de la création du compte.' });
    }

    res.status(201).json({ message: 'Compte créé avec succès.' });
  });
});

// 🔑 Connexion
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM utilisateur WHERE email = ? AND password = ?`;

  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error('Erreur SQL:', err);
      return res.status(500).json({ error: 'Erreur serveur.' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Email ou mot de passe incorrect.' });
    }

    const user = results[0];
    res.status(200).json({
      message: 'Connexion réussie.',
      token: 'fake-jwt-token',
      role: user.role,
      user: {
        id: user.id,
        nom: user.nom,
        email: user.email
      }
    });
  });
});

// 👨‍🎓 Ajouter un étudiant
app.post('/api/etudiants', (req, res) => {
  const { utilisateur_id, classe, date_naissance } = req.body;

  if (!utilisateur_id || !classe || !date_naissance) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  const sql = `INSERT INTO etudiant (utilisateur_id, classe, date_naissance) VALUES (?, ?, ?)`;

  db.query(sql, [utilisateur_id, classe, date_naissance], (err, result) => {
    if (err) {
      console.error('Erreur ajout étudiant:', err);
      return res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'étudiant.' });
    }

    res.status(201).json({ message: 'Étudiant ajouté avec succès.' });
  });
});

// 📋 Consultation des notes d'un étudiant
app.get('/etudiants', (req, res) => {
  const { nom, identifiant } = req.query;

  if (!nom || !identifiant) {
    return res.status(400).json({ message: 'Nom et identifiant requis.' });
  }

  const sql = `
    SELECT matiere, noteDS, noteExam, noteTP, moyenne
    FROM notes
    WHERE nom = ? AND identifiant = ?
  `;

  db.query(sql, [nom, identifiant], (err, rows) => {
    if (err) {
      console.error('Erreur SQL:', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }

    if (rows.length > 0) {
      res.json({ success: true, data: rows });
    } else {
      res.json({ success: false, message: 'Aucun résultat' });
    }
  });
});

// 🚀 Lancer le serveur
const PORT = 3100;
app.listen(PORT, () => {
  console.log(`🚀 Serveur backend lancé sur http://localhost:${PORT}`);
});

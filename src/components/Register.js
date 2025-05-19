/**
    * @description      : 
    * @author           : waeld
    * @group            : 
    * @created          : 16/05/2025 - 17:55:02
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/05/2025
    * - Author          : waeld
    * - Modification    : 
**/
// src/pages/Register.js
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('etudiant');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!nom || !email || !password || !role) {
      setError('Tous les champs sont requis.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3100/api/signup', {
        nom,
        email,
        password,
        role,
      });
      setMessage(response.data.message);
      setNom('');
      setEmail('');
      setPassword('');
      setRole('');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Erreur serveur, veuillez réessayer.');
      }
    }
  };

  // Styles CSS en JS
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontFamily: 'Arial, sans-serif',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '6px',
      fontWeight: 'bold',
      color: '#555',
    },
    input: {
      width: '100%',
      padding: '8px 10px',
      fontSize: '14px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
    },
    select: {
      width: '100%',
      padding: '8px 10px',
      fontSize: '14px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
      backgroundColor: 'white',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      fontSize: '16px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      marginBottom: '15px',
      textAlign: 'center',
    },
    success: {
      color: 'green',
      marginBottom: '15px',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Inscription</h2>
      {error && <div style={styles.error}>{error}</div>}
      {message && <div style={styles.success}>{message}</div>}
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Nom</label>
          <input
            type="text"
            style={styles.input}
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Mot de passe</label>
          <input
            type="password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Rôle</label>
          <select
            style={styles.select}
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="etudiant">Étudiant</option>
            <option value="professeur">Professeur</option>
          </select>
        </div>
        <button type="submit" style={styles.button}>S’inscrire</button>
      </form>
    </div>
  );
}

export default Register;

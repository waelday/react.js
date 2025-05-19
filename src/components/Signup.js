/**
    * @description      : 
    * @author           : waeld
    * @group            : 
    * @created          : 18/05/2025 - 08:39:32
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/05/2025
    * - Author          : waeld
    * - Modification    : 
**/
/**
 * @description      : Composant d'inscription utilisateur
 * @author           : waeld
 * @created          : 16/05/2025
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 16/05/2025
 * - Author          : waeld
 * - Modification    : 
**/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css'; // Importation du CSS

function Signup() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('etudiant');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const response = await axios.post('http://localhost:3100/api/signup', {
        nom,
        email,
        password,
        role,
      });

      alert('Inscription réussie ! Vous pouvez vous connecter.');
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMsg(error.response.data.error);
      } else {
        setErrorMsg('Erreur lors de l’inscription.');
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Inscription</h2>
        <input
          type="text"
          placeholder="Nom complet"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="etudiant">Étudiant</option>
          <option value="professeur">Professeur</option>
          <option value="admin">Admin</option>
        </select>
        {errorMsg && <p className="error">{errorMsg}</p>}
        <button type="submit">S’inscrire</button>
      </form>
    </div>
  );
}

export default Signup;

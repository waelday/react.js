/**
    * @description      : 
    * @author           : waeld
    * @group            : 
    * @created          : 16/05/2025 - 20:15:40
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
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3100/api/login', { email, password });

      const { token, role } = response.data;

      // Sauvegarde du token et du rôle dans le localStorage
      localStorage.setItem('authToken', token);
      localStorage.setItem('userRole', role);

      // Redirection selon le rôle
      switch(role) {
        case 'etudiant':
          navigate('/etudiant');
          break;
        case 'professeur':
          navigate('/professeur');
          break;
        case 'admin':
          navigate('/admin');
          break;
        default:
          setErrorMsg('Rôle inconnu.');
          break;
      }
    } catch (error) {
      if (error.response) {
        // Erreur renvoyée par le backend
        setErrorMsg(error.response.data.error || 'Erreur serveur. Veuillez réessayer.');
      } else if (error.request) {
        // Pas de réponse du serveur
        setErrorMsg('Le serveur ne répond pas. Veuillez vérifier votre connexion.');
      } else {
        // Autre erreur
        setErrorMsg('Une erreur est survenue. Veuillez réessayer.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connexion</h2>

        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />

        {errorMsg && <p className="error">{errorMsg}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Connexion...' : 'Se connecter'}
        </button>
      </form>
    </div>
  );
}

export default Login;

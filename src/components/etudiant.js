/**
    * @description      : 
    * @author           : waeld
    * @group            : 
    * @created          : 17/05/2025 - 23:16:46
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/05/2025
    * - Author          : waeld
    * - Modification    : 
**/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Etudiant() {
  const [nom, setNom] = useState('');
  const [identifiant, setIdentifiant] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const consulterNotes = async () => {
    if (!nom || !identifiant) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.get('http://localhost:3100/etudiants', {
        params: { nom, identifiant }
      });

      if (response.data.success) {
        // Redirection vers /notes en envoyant les données
        navigate('/notes', {
          state: {
            nom,
            identifiant,
            notes: response.data.data
          }
        });
      } else {
        setError('Aucun résultat');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors de la requête');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>🔍 Recherche d'Étudiant</h2>
      <div style={{ marginBottom: '20px' }}>
        <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
        <input type="text" placeholder="Identifiant" value={identifiant} onChange={(e) => setIdentifiant(e.target.value)} />
        <button onClick={consulterNotes} disabled={loading}>
          {loading ? 'Chargement...' : 'Rechercher'}
        </button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Etudiant;

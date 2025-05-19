/**
    * @description      : 
    * @author           : waeld
    * @group            : 
    * @created          : 13/05/2025 - 18:41:02
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/05/2025
    * - Author          : waeld
    * - Modification    : 
**/
import React, { useState } from 'react';
import axios from 'axios';

function Professeurs() {
  const [form, setForm] = useState({
    nom: '', prenom: '', identifiant: '', matiere: '', noteDS: '', noteExam: '', noteTP: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const ajouterEtudiant = async () => {
    try {
      await axios.post('http://localhost:3001/etudiants', {
        ...form,
        noteDS: parseFloat(form.noteDS) || 0,
        noteExam: parseFloat(form.noteExam) || 0,
        noteTP: parseFloat(form.noteTP) || 0,
      });

      alert('Étudiant ajouté avec succès.');
      setForm({ nom: '', prenom: '', identifiant: '', matiere: '', noteDS: '', noteExam: '', noteTP: '' });
    } catch (err) {
      alert(err.response?.data?.error || 'Erreur lors de l\'ajout');
    }
  };

  return (
    <div style={{ padding: '30px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Ajouter un étudiant</h2>
      {['nom', 'prenom', 'identifiant', 'matiere', 'noteDS', 'noteExam', 'noteTP'].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={form[field]}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
        />
      ))}
      <button onClick={ajouterEtudiant}>Ajouter</button>
    </div>
  );
}

export default Professeurs;

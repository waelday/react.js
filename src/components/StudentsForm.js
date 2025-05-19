/**
    * @description      : 
    * @author           : waeld
    * @group            : 
    * @created          : 06/05/2025 - 10:56:51
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 06/05/2025
    * - Author          : waeld
    * - Modification    : 
**/
/**
 * @description      : Formulaire d'inscription pour les étudiants
 * @author           : waeld
 * @created          : 06/05/2025
 */

import React, { useState } from 'react';
import axios from 'axios';
import './StudentsForm.css';

function StudentsForm() {
  const [nom, setNom] = useState('');  // Changer name en nom pour correspondre à backend
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Modification de l'URL pour correspondre au backend
      await axios.post('http://localhost:3001/api/etu', {
        nom,  // Changer name en nom
        email,
        phone,
        address
      });

      alert('Inscription réussie !');
      setNom('');  // Changer name en nom
      setEmail('');
      setPhone('');
      setAddress('');
    } catch (err) {
      console.error('Erreur Axios :', err);
      alert("Erreur lors de l'inscription.");
    }
  };

  return (
    <div className="form-container">
      <h2>Inscription Étudiant</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom complet</label>
        <input
          type="text"
          placeholder="Nom complet"
          value={nom}  // Changer name en nom
          onChange={(e) => setNom(e.target.value)}  // Changer name en nom
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Téléphone</label>
        <input
          type="tel"
          placeholder="Numéro de téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label>Adresse</label>
        <input
          type="text"
          placeholder="Adresse"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default StudentsForm;

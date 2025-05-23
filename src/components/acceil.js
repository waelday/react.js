/**
    * @description      : 
    * @author           : waeld
    * @group            : 
    * @created          : 22/05/2025 - 17:43:53
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/05/2025
    * - Author          : waeld
    * - Modification    : 
**/
import React from 'react';
import './acceil.css';
import { Link } from 'react-router-dom';

function Accueil() {
  return (
    <div className="accueil-container">
      <header className="accueil-header">
        <h1>Bienvenue dans l'application de gestion des notes</h1>
        <p>Gérez facilement les notes des étudiants</p>
      </header>

      <div className="accueil-actions">
        <Link to="/ajouter-note" className="accueil-button">Ajouter une note</Link>
        <Link to="/consulter-notes" className="accueil-button">Consulter les notes</Link>
        <Link to="/statistiques" className="accueil-button">Voir les statistiques</Link>
      </div>
    </div>
  );
}

export default Accueil;

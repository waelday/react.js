/**
    * @description      : 
    * @author           : waeld
    * @group            : 
    * @created          : 18/05/2025 - 15:28:29
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/05/2025
    * - Author          : waeld
    * - Modification    : 
**/
/**
 * @description      : Page d'accueil de l'utilisateur connecté
 * @author           : waeld
 * @created          : 05/05/2025
 * @modified         : 18/05/2025
 */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './acceil.css';

const Acceil = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert('Vous avez été déconnecté.');
    navigate('/login');
  };

  return (
    <div className="acceil-container">
      <header className="acceil-header">
        <h2>👋 Bienvenue</h2>
        <p>Vous êtes connecté avec succès à votre espace personnel.</p>
      </header>

      <section className="dashboard-info">
        <h3>🔧 Tableau de bord</h3>
        <ul>
          <li>
            <Link to="/settings">⚙️ Paramètres du compte</Link>
          </li>
          <li>
            <a
              href="https://support.google.com/websearch/answer/13420891?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔍 Aide à la recherche Google
            </a>
          </li>
          <li>
            <a
              href="https://developer.android.com/develop/ui/views/notifications/custom-notification?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔔 Notifications Android
            </a>
          </li>
        </ul>
      </section>

      <section className="news-section">
        <h3>📰 Dernières nouvelles</h3>
        <ul>
          <li>✨ Nouvelle fonctionnalité ajoutée à notre plateforme !</li>
          <li>🎁 Offres spéciales disponibles pour les membres</li>
        </ul>
      </section>

      <div className="logout-section">
        <button onClick={handleLogout}>🚪 Déconnexion</button>
      </div>
    </div>
  );
};

export default Acceil;

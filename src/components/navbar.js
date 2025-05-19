/**
    * @description      : 
    * @author           : waeld
    * @group            : 
    * @created          : 15/05/2025 - 16:01:39
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/05/2025
    * - Author          : waeld
    * - Modification    : 
**/
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <h2 className="logo">MonApp</h2>
      <ul className="nav-links">
        <li><Link to="/accueil">Accueil</Link></li>
        <li><Link to="/students-form">Inscription étudiant</Link></li>
        <li><Link to="/professeur">Tableau de bord professeur</Link></li>
        <li><Link to="/signup">Créer un compte</Link></li> {/* ✅ Lien ajouté */}
        <li>
          <button onClick={handleLogout} className="logout-btn">
            Déconnexion
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

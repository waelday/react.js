/**
    * @description      : 
    * @author           : waeld
    * @group            : 
    * @created          : 22/05/2025 - 17:47:41
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/05/2025
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
      <div className="navbar-logo">
        <Link to="/">📘 MonApp</Link>
      </div>
      <ul className="nav-links">
      
        <li><Link to="/students-form">Connexion</Link></li>
        <li><Link to="/professeur">Tableau professeur</Link></li>
        <li><Link to="/signup">Créer un compte</Link></li>
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

/**
    * @description      : 
    * @author           : waeld
    * @group            : 
    * @created          : 18/05/2025 - 15:21:50
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/05/2025
    * - Author          : waeld
    * - Modification    : 
**/
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/Register';
import Etudiant from './components/etudiant';
import Professeur from './components/professeurs';
import ConsultationNotes from './components/ConsultationNotes';
import Navbar from './components/navbar';
import Acceil from './components/acceil';

import './App.css';

// Composant pour afficher la navbar sauf sur /login et /signup
function LayoutWithNavbar({ children }) {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWithNavbar>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} /> {/* Redirection vers Home */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/etudiant" element={<Etudiant />} />
          <Route path="/notes" element={<ConsultationNotes />} />
          <Route path="/home" element={<Acceil />} />
          <Route path="/professeur" element={<Professeur />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </LayoutWithNavbar>
    </Router>
  );
}

export default App;

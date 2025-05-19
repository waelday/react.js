/**
    * @description      : 
    * @author           : waeld
    * @group            : 
    * @created          : 17/05/2025 - 23:17:20
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/05/2025
    * - Author          : waeld
    * - Modification    : 
**/
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ConsultationNotes() {
  const location = useLocation();
  const navigate = useNavigate();
  const { nom, identifiant, notes } = location.state || {};

  if (!notes) {
    return (
      <div>
        <p>Aucune donnée reçue. Retour à la recherche.</p>
        <button onClick={() => navigate('/etudiant')}>Retour</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '30px' }}>
      <h2>🎓 Consultation de Notes pour {nom} (ID: {identifiant})</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Matière</th>
            <th>DS</th>
            <th>Examen</th>
            <th>TP</th>
            <th>Moyenne</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note, index) => (
            <tr key={index}>
              <td>{note.matiere}</td>
              <td>{note.noteDS}</td>
              <td>{note.noteExam}</td>
              <td>{note.noteTP}</td>
              <td>{note.moyenne}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate('/etudiant')} style={{ marginTop: '20px' }}>🔙 Nouvelle Recherche</button>
    </div>
  );
}

export default ConsultationNotes;

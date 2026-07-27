import { useEffect, useState } from 'react';
import { fetchApiTest } from './services/api';
import './App.css';

function App() {
  const [message, setMessage] = useState('Chargement...');

  useEffect(() => {
    fetchApiTest()
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Erreur de connexion à l\'API'));
  }, []);

  return (
    <div>
      <h1>Mon Stock</h1>
      <p>Réponse de l'API Symfony : {message}</p>
    </div>
  );
}

export default App;
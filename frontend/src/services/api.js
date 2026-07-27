const API_BASE_URL = 'http://localhost:8000';

export async function fetchApiTest() {
  const response = await fetch(`${API_BASE_URL}/api/test`);
  if (!response.ok) {
    throw new Error('Erreur réseau');
  }
  return response.json();
}
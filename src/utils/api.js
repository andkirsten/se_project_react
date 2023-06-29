const API_URL = "http://localhost:3001"; // The URL where your json-server is running

const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

const api = {
  getGarments: () => {
    return fetch(`${API_URL}/items`).then(handleResponse);
  },
  createGarment: (garmentData) => {
    return fetch(`${API_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(garmentData),
    }).then(handleResponse);
  },
  updateGarment: (id, garmentData) => {
    return fetch(`${API_URL}/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(garmentData),
    }).then(handleResponse);
  },
  deleteGarment: (id) => {
    return fetch(`${API_URL}/items/${id}`, {
      method: "DELETE",
    }).then(handleResponse);
  },
};

export default api;

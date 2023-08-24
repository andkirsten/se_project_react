import { API_URL } from "./constants";

const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Error: ${response.status}`);
};

const api = {
  getGarments: () => {
    return fetch(`${API_URL}/items`).then(handleResponse);
  },
  createGarment: (garmentData, token) => {
    return fetch(`${API_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(garmentData),
    });
  },
  updateGarment: (id, garmentData) => {
    return fetch(`${API_URL}/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(garmentData),
    });
  },
  deleteGarment: (id, token) => {
    return fetch(`${API_URL}/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  },
  addCardLike: (id, token) => {
    return fetch(`${API_URL}/items/${id}/likes`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  },
  removeCardLike: (id, token) => {
    return fetch(`${API_URL}/items/${id}/likes`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default api;

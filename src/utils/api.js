import { API_URL } from "./constants";

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
  createGarment: (garmentData, token) => {
    return fetch(`${API_URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
  deleteGarment: (id, token) => {
    return fetch(`${API_URL}/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(handleResponse);
  },
  addCardLike: (id, token) => {
    return fetch(`${API_URL}/items/${id}/likes`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(handleResponse);
  },
  removeCardLike: (id, token) => {
    return fetch(`${API_URL}/items/${id}/likes`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(handleResponse);
  },
};

export default api;

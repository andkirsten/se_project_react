import { API_URL } from "./constants";

const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export function registerUser({ name, avatar, email, password }) {
  return fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(handleResponse);
}

export function loginUser(email, password) {
  return fetch(`${API_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
}

export function updateUser({ name, avatar, _id }, token) {
  return fetch(`${API_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify({ name, avatar, _id }),
  }).then(handleResponse);
}

export function verifyToken(token) {
  return fetch(`${API_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
}

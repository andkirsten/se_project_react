import axios from "axios";

const API_URL = "http://localhost:3001"; // The URL where your json-server is running

const api = axios.create({
  baseURL: API_URL,
});

// Define your API methods
const apiMethods = {
  getGarments: () => api.get("/items"),
  createGarment: (garmentData) => api.post("/items", garmentData),
  updateGarment: (id, garmentData) => api.put(`/items/${id}`, garmentData),
  deleteGarment: (id) => api.delete(`/items/${id}`),
};

export default apiMethods;

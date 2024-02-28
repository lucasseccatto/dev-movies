import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "18c0388af8a48131d618dbf1f971758c",
    language: "pt-BR",
    page: 1,
  },
});

export default api;

import axios from "axios"

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
    language: 'en-US',
  },
});
// Key - VITE_TMDB_API_KEY=0f19fee237e45e7cffbe96734e7a85c0
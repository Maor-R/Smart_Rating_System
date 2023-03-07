import axios from 'axios';

const api = axios.create({
  baseURL: "https://640068539f844910299000ce.mockapi.io",
});

export { api };

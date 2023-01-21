import axios from 'axios';

// create axios
const instance = axios.create({
  baseURL: 'http://192.168.0.61:3000/',
  timeout: 1000,
});

export default instance;

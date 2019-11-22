import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://52.176.94.163/API'
});

export default instance;

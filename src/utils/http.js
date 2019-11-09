import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://40.122.118.20/API'
});

export default instance;

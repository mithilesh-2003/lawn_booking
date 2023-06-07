import axios from 'axios';
const client = axios.create({
  baseURL: 'https://long-shorts-worm.cyclic.app/',
});

export { client };
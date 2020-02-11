import axios from 'axios';
export default axios.create({
  baseURL: 'http://rallycoding.herokuapp.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

import axios from 'axios';

const apiUrl = process.env.BASE_API_URL || 'http://localhost:8080';

export async function login(username, password) {
  return axios.post(`${apiUrl}/authenticate`, {
    username,
    password,
  });
}

export async function register(data) {
  return axios.post(`${apiUrl}/travelers/sign-up`, {
    data,
  });
}

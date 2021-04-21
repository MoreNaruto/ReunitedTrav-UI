import axios from 'axios';
import authHeader from '../../services/auth-header';

const apiUrl = process.env.BASE_API_URL || 'http://localhost:8080';

export async function fetchEvents() {
  return axios({
    method: 'get',
    url: `${apiUrl}/events`,
    headers: authHeader(),
  });
}

export async function createEvent(eventData) {
  return axios({
    method: 'post',
    url: `${apiUrl}/events/create`,
    headers: authHeader(),
    data: eventData,
  });
}

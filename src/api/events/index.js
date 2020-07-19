const apiUrl = process.env['BASE_API_URL'] || 'http://localhost:8080'
import axios from "axios"

export async function fetchEvents() {
    return axios({
        method: "get",
        url: `${apiUrl}/events`
    })
}
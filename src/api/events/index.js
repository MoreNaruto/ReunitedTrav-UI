const apiUrl = process.env['BASE_API_URL'] || 'http://localhost:8080'

export async function fetchEvents() {
    try {
        const response = await fetch(`${apiUrl}/events`);
        return await response.json();
    } catch (e) {
        console.log(e);
    }
}
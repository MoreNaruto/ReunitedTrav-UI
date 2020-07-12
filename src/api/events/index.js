const apiUrl = process.env.REACT_APP_BASE_API_URL || 'http://localhost:8080'

export async function fetchEvents() {
    try {
        console.log("URL: " + process.env['BASE_API_URL']);
        const response = await fetch(process.env['BASE_API_URL'] + "/events");
        return await response.json();
    } catch (e) {
        console.log(e);
    }
}
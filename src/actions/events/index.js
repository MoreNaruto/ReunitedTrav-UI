import {REQUEST_EVENTS_API_DATA, RECEIVE_EVENTS_API_DATA} from "./types";

export const requestEventsApiData = ()=> ({type: REQUEST_EVENTS_API_DATA})
export const receiveEventsApiData = data => ({type: RECEIVE_EVENTS_API_DATA, data})
import {REQUEST_EVENTS_API_DATA, RECEIVE_EVENTS_API_DATA, FAILED_RECEIVE_EVENTS_API_DATA} from "./types";

export const requestEventsApiData = () => {
    return {type: REQUEST_EVENTS_API_DATA}
}
export const receiveEventsApiData = payload => {return {type: RECEIVE_EVENTS_API_DATA, payload}}
export const failedReceiveEventsApiData = error => {return {type: FAILED_RECEIVE_EVENTS_API_DATA, error}}
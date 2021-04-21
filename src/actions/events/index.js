import {
  REQUEST_EVENTS_API_DATA,
  REQUEST_CREATE_EVENT_API_DATA,
  RECEIVE_EVENTS_API_DATA,
  FAILED_RECEIVE_EVENTS_API_DATA,
  CREATED_EVENT_API_DATA,
  FAILED_CREATED_EVENT_API_DATA,
} from './types';

export const requestEventsApiData = () => ({ type: REQUEST_EVENTS_API_DATA });
export const requestCreateEventApiData = (data) => ({ type: REQUEST_CREATE_EVENT_API_DATA, data });
export const receiveEventsApiData = (payload) => ({ type: RECEIVE_EVENTS_API_DATA, payload });
export const failedReceiveEventsApiData = (error) => ({ type: FAILED_RECEIVE_EVENTS_API_DATA, error });
export const createdEventApiData = (payload) => ({ type: CREATED_EVENT_API_DATA, payload });
export const failedCreatedEventApiData = (payload) => ({ type: FAILED_CREATED_EVENT_API_DATA, payload });

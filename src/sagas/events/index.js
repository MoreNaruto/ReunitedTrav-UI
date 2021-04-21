import { call, put, takeLatest } from 'redux-saga/effects';
import {
  failedReceiveEventsApiData, receiveEventsApiData, createdEventApiData, failedCreatedEventApiData,
} from '../../actions/events';
import { REQUEST_EVENTS_API_DATA, REQUEST_CREATE_EVENT_API_DATA } from '../../actions/events/types';
import { fetchEvents, createEvent } from '../../api/events';

function* getEvents() {
  try {
    const response = yield call(fetchEvents);
    yield put(receiveEventsApiData(response));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(failedReceiveEventsApiData(error));
  }
}

function* generateEvent(eventData) {
  try {
    const response = yield call(createEvent(eventData));
    yield put(createdEventApiData(response));
  } catch (error) {
    yield put(failedCreatedEventApiData(error));
  }
}

export default function* eventSagas() {
  yield takeLatest(REQUEST_EVENTS_API_DATA, getEvents);
  yield takeLatest(REQUEST_CREATE_EVENT_API_DATA, generateEvent);
}

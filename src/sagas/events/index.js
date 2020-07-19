import {call, put, takeLatest} from "redux-saga/effects";
import {failedReceiveEventsApiData, receiveEventsApiData} from "../../actions/events";
import {REQUEST_EVENTS_API_DATA} from "../../actions/events/types";
import {fetchEvents} from "../../api/events";

function* getEvents() {
    try{
        const response = yield call(fetchEvents)
        yield put(receiveEventsApiData(response))
    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put(failedReceiveEventsApiData(error));
    }
}

export default function* eventSagas() {
    yield takeLatest(REQUEST_EVENTS_API_DATA, getEvents);
}
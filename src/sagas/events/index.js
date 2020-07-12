import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import {receiveEventsApiData} from "../../actions/events";
import {REQUEST_EVENTS_API_DATA} from "../../actions/events/types";
import {fetchEvents} from "../../api/events";

function* getEvents(action) {
    try{
        const eventData = yield call(fetchEvents)
        yield put(receiveEventsApiData(eventData))
    } catch (e) {
        console.log(e);
    }
}

export default function* eventSagas() {
    yield takeLatest(REQUEST_EVENTS_API_DATA, getEvents);
}
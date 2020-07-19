import eventSagas from "./events";
import {all} from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        eventSagas(),
    ])
}
import {REQUEST_EVENTS_API_DATA, RECEIVE_EVENTS_API_DATA} from "../../actions/events/types";

const initialState = {
    loading: true,
    events: [],
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case RECEIVE_EVENTS_API_DATA:
            return {...state, events: payload.data, loading: false}
        case REQUEST_EVENTS_API_DATA:
            return {...state, loading: true}
        default:
            return state;
    }
};
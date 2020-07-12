import {RECEIVE_EVENTS_API_DATA} from "../../actions/events/types";

export default (state = {}, {type, data}) => {
    switch (type) {
        case RECEIVE_EVENTS_API_DATA:
            return data;
        default:
            return state;
    }
};
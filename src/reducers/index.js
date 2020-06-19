import {
    API_START,
    API_END,
    SIGN_UP_FORM,
    FETCH_TRAVELERS,
} from "../actions/types";

export default function(state = {}, action) {
    console.log("action type => ", action.type);
    switch (action.type) {
        case SIGN_UP_FORM:
            return { data: action.payload };
        case API_START:
            if (action.payload === FETCH_TRAVELERS) {
                return {
                    ...state,
                    isLoadingData: true
                };
            }
            break;
        case API_END:
            if (action.payload === FETCH_TRAVELERS) {
                return {
                    ...state,
                    isLoadingData: false
                };
            }
            break;
        default:
            return state;
    }
}
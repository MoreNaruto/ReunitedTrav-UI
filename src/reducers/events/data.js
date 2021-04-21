import {
  REQUEST_EVENTS_API_DATA,
  CREATED_EVENT_API_DATA,
  REQUEST_CREATE_EVENT_API_DATA,
  RECEIVE_EVENTS_API_DATA,
} from '../../actions/events/types';

const initialState = {
  loading: true,
  events: [],
  createdEvent: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVE_EVENTS_API_DATA:
      return { ...state, events: payload.data, loading: false };
    case REQUEST_EVENTS_API_DATA:
      return { ...state, loading: true };
    case REQUEST_CREATE_EVENT_API_DATA:
      return { ...state, loading: true };
    case CREATED_EVENT_API_DATA:
      return { ...state, createdEvent: payload.data, events: [...state.events, payload.data] };
    default:
      return state;
  }
};

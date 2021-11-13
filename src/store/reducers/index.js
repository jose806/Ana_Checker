import { combineReducers } from "redux";
import userReducer from "./userReducer";
import attendeeReducer from "./attendeesReducer";
import eventReducer from "./eventReducer";
import selectedAttendeeReducer from "./selectedAttendeeReducer";
import selectedEventReducer from "./selectedEventReducer";
const reducers = combineReducers({
  user: userReducer,
  attendees: attendeeReducer,
  events: eventReducer,
  selectedAttendee: selectedAttendeeReducer,
  selectedEvent: selectedEventReducer,
});

export default reducers;

export const getAttendees = (attendees) => {
  return (dispatch) => {
    dispatch({
      type: "getAttendees",
      payload: attendees,
    });
  };
};

export const addLoggedInUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: "addLoggedInUser",
      payload: user,
    });
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch({
      type: "logOut",
    });
  };
};

export const getEvents = (events) => {
  return (dispatch) => {
    dispatch({
      type: "getEvents",
      payload: events,
    });
  };
};

export const selectAttendee = (attendee) => {
  return (dispatch) => {
    dispatch({
      type: "selectAttendee",
      payload: attendee,
    });
  };
};

export const selectEvent = (event) => {
  return (dispatch) => {
    dispatch({
      type: "selectEvent",
      payload: event,
    });
  };
};

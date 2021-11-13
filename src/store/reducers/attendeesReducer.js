
const reducer = (state = null, action) => {
  switch (action.type) {
    case "getAttendees":
      return action.payload;
    default: {
      return state;
    }
  }
};

export default reducer;

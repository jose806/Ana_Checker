
const reducer = (state = null, action) => {
  switch (action.type) {
    case "selectAttendee": {
      const select = state;
      console.log("In select Reducer", select);
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default reducer;

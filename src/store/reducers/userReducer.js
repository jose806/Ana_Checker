
const reducer = (state = null, action) => {
  switch (action.type) {
    case "addLoggedInUser":
      return action.payload;
    case "logOut":
      return null;
    default: {
      return state;
    }
  }
};

export default reducer;

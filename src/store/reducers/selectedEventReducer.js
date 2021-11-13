const reducer = (state = null, action) => {
    switch (action.type) {
      case "selectEvent": {
        const select = state;
        console.log("In select event Reducer", select);
        return action.payload;
      }
      default: {
        return state;
      }
    }
  };
  
  export default reducer;
  
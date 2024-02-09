const initialState = {
  users: [],
  error: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        users: action.payload,
        error: "",
      };

    case "ERROR":
      return {
        ...state,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
}

export default userReducer;

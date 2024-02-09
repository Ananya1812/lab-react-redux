// Action types
const FETCH_DATA = "FETCH_DATA";
const ERROR = "ERROR";

// Action creators
export function fetchUserData(userData) {
  return {
    type: FETCH_DATA,
    payload: userData,
  };
}

export function showError(errorMessage) {
  return {
    type: ERROR,
    payload: errorMessage,
  };
}

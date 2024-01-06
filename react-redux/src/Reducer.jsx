import { INCREMENT, DECREMENT } from './Actions';
import './App.css'

// Initial state
const initialState = {
  count: 0,
};

// Reducer function
const likeCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default likeCounterReducer;

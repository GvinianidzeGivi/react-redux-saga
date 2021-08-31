import { combineReducers } from "redux";
import posts from "../store/posts/reducer";

const rootReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    posts,
  });

  return combinedReducer(state, action);
};

export default rootReducer;

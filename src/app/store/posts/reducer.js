import constants from "./CONSTANTS";

const initialState = {
  data: {
    posts: null,
    loading: false,
    error: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.POSTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case constants.POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };

    case constants.POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;

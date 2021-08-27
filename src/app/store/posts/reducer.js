import constants from "./CONSTANTS";

const initialState = {
  data: {
    posts: null,
    loading: false,
    error: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.POSTS_LOADING:
      return {
        data: {
          ...state.data,
          loading: true
        }
      };
    case constants.POSTS_SUCCESS:
      return {
        data: {
          ...state.data,
          posts: action.payload,
          loading: false
        }
      };

    case constants.POSTS_ERROR:
      return {
        data: {
          ...state.data,
          loading: false,
          error: action.payload
        }
      };

    default:
      return {
        ...state
      };
  }
};

export default reducer;

import constants from "./CONSTANTS";

const initialState = {
  data: {
    posts: null,
    selectedUser: null,
    loading: false,
    error: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //posts reducers
    case constants.GET_POSTS:
      return {
        ...state,
        loading: true,
      };
    case constants.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };

    case constants.ERROR_POSTS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    //post reducers
    case constants.GET_POST:
      return {
        ...state,
        loading: true,
      };

    case constants.SET_POST:
      return {
        ...state,
        loading: false,
        selectedUser: action.payload,
      };

    case constants.CLEAR_POST:
      return {
        ...state,
        loading: false,
        selectedUser: null,
        error: false,
      };

    case constants.ERROR_POST:
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

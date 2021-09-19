import {
  UPDATE_SEARCH_PARAMS,
  UPDATE_SEARCH_RESULTS,
  UPDATE_SEARCH_HISTORY,
  DELETE_HISTORY_BY_INDEX,
} from "../actionTypes";

const initialState = {
  result: {},
  params: {},
  history: [],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_RESULTS:
      return { ...state, result: action.results };

    case UPDATE_SEARCH_PARAMS:
      return {
        ...state,
        params: { city: action.city, country: action.country },
      };

    case UPDATE_SEARCH_HISTORY:
      state.history.unshift(action.results);

      return { ...state, history: state.history };

    case DELETE_HISTORY_BY_INDEX:
      state.history.splice(action.index, 1);

      return { ...state, history: state.history };

    default:
      return state;
  }
};

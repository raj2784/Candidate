import {
  GET_ALL_CANDIDATE,
  GET_CANDIDATE,
  CREATE_CANDIDATE,
  DELETE_CANDIDATE,
  DELETE_SELECTED_CANDIDATES,
  SELECT_CANDIDATE,
} from "../Constant/types";

const initialState = {
  candidates: [],
  candidate: null,
  counter: 0,
  name: "xyz",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_CANDIDATE:
      return {
        ...state,
        candidates: payload,
      };
    case GET_CANDIDATE:
      return {
        ...state,
        candidate: payload,
      };
    case CREATE_CANDIDATE:
      return {
        ...state,
        candidates: [payload, ...state.candidates],
      };
    case DELETE_CANDIDATE:
      return {
        ...state,
        candidates: state.candidates.filter(
          (candidate) => candidate.id !== payload.id
        ),
      };
    default:
      return state;
  }
};

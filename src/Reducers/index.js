import { combineReducers } from "redux";
import CandidateReducer from "./CandidateReducer";

export default combineReducers({
  candidate: CandidateReducer,
});

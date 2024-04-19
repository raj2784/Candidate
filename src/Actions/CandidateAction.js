import {
  CREATE_CANDIDATE,
  GET_ALL_CANDIDATE,
  GET_CANDIDATE,
  UPDATE_CANDIDATE,
  DELETE_CANDIDATE,
  SELECT_CANDIDATE,
  CLEAR_CANDIDATE,
  DELETE_SELECTED_CANDIDATE,
} from "../Constant/types";
import axios from "axios";

//get all candidates
export const getAllCandidates = () => async (dispatch) => {
  const result = await axios.get("https://localhost:44351/api/candidate");
  dispatch({
    type: GET_ALL_CANDIDATE,
    payload: result.data,
  });
};

//get candidate
export const getCandidate = (id) => async (dispatch) => {
  const result = await axios.get(`https://localhost:44351/api/candidate/${id}`);
  console.log(result.data);
  dispatch({
    type: GET_CANDIDATE,
    payload: result.data,
  });
};

//add new candidate
export const createCandidate = (candidate) => async (dispatch) => {
  const result = await axios.post(
    "https://localhost:44351/api/candidate",
    candidate
  );
  dispatch({
    type: CREATE_CANDIDATE,
    payload: result.data,
  });
};

//update candidate
export const updateCandidate = (candidate) => async (dispatch) => {
  const result = await axios.put(
    `https://localhost:44351/api/candidate/${candidate.id}`,
    candidate
  );
  dispatch({
    type: UPDATE_CANDIDATE,
    payload: result.data,
  });
};

//delete canidate
export const deleteCandidate = (id) => async (dispatch) => {
  await axios.delete(`https://localhost:44351/api/candidate/${id}`);
  dispatch({
    type: DELETE_CANDIDATE,
    payload: id,
  });
};

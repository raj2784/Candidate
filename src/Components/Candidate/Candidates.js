import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Candidate from "./Candidate";
import { getAllCandidates } from "../../Actions/CandidateAction";

const Candidates = () => {
  const dispatch = useDispatch();
  //in Reducers.index.js defined as candidate: combinedReducer
  const candidates = useSelector((state) => state.candidate.candidates);

  useEffect(() => {
    dispatch(getAllCandidates());
  }, []);

  //console.log("candidates", candidates);

  return (
    <div className="container" style={{ marginTop: 70 }}>
      <table className="table table-shadow">
        <thead className="bg-danger text-white">
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label"></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <Candidate key={candidate.id} candidate={candidate} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Candidates;

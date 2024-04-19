import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createCandidate } from "../../Actions/CandidateAction";

const AddCandidate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [candidate, setCandidate] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });
  const { name, phoneNumber, email } = candidate;
  const onInputChange = (e) => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    // console.log(e);
    e.preventDefault();
    if (candidate.name === "") {
      alert("Name fields is required!!");
      return;
    }
    dispatch(createCandidate(candidate));
    navigate("/");
  };
  const onClickCancel = async (e) => {
    e.preventDefault();
    //console.log(e);
    navigate("/");
    //history.push("/");
  };
  return (
    <div className=" container card border-0 shadow" style={{ marginTop: 70 }}>
      <div className="card-header">Add Candidate</div>
      <div className="card-body">
        <form onSubmit={submitForm}>
          <div className="form-group m-1">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <div className="form-group m-1">
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <div className="form-group m-1">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => onInputChange(e)}
            ></input>
          </div>
          <div className="form-group mt-3">
            <button className="btn btn-primary">Add Candidate</button>
            <Link
              className="btn btn-danger btn-block m-2"
              onClick={(e) => onClickCancel(e)}
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCandidate;

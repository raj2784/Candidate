import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCandidate, getCandidate } from "../../Actions/CandidateAction";
import { useParams, useNavigate, Link } from "react-router-dom";

export const EditCandidate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // for selecting one cadidate useSelector((state) => state.candidate.candidate)
  const candidate = useSelector((state) => state.candidate.candidate);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEamil] = useState("");

  useEffect(() => {
    loadCandidate();
  }, []);

  useEffect(() => {
    if (candidate) {
      setName(candidate.name);
      setPhoneNumber(candidate.phoneNumber);
      setEamil(candidate.email);
    }
  }, [candidate]);

  console.log("data", name, phoneNumber, email);

  const loadCandidate = () => {
    dispatch(getCandidate(id));
  };

  const submitForm = (e) => {
    e.preventDefault();

    // const updated_candidate = Object.assign(candidate, {
    //   id: candidate.id,
    //   name: name,
    //   phoneNumber: phoneNumber,
    //   email: email,
    // });

    // eighter above code for updated_candidate
    const updated_candidate = {
      id: candidate.id,
      name: name,
      phoneNumber: phoneNumber,
      email: email,
    };

    dispatch(updateCandidate(updated_candidate));
    navigate("/");
  };
  const onClickCancel = async (e) => {
    e.preventDefault();
    //console.log(e);
    navigate("/");
  };
  return (
    <div className=" container card border-0 shadow" style={{ marginTop: 70 }}>
      <div className="card-header">Edit Candidate</div>
      <div className="card-body">
        <form onSubmit={submitForm}>
          <div className="form-group m-1">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="form-group m-1">
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
          </div>
          <div className="form-group m-1">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEamil(e.target.value)}
            ></input>
          </div>
          <div className="form-group mt-3">
            <button className="btn btn-primary">Update Candidate</button>
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

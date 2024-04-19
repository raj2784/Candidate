import React, { useEffect } from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCandidate } from "../../Actions/CandidateAction";

function Candidate(props) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar
          name={props.candidate.name}
          size="45"
          round={true}
          className="ml-2"
        />
        {props.candidate.name}
      </td>
      <td>{props.candidate.phoneNumber}</td>
      <td>{props.candidate.email}</td>
      <td className="actions">
        <Link to={`/updatecandidate/${props.candidate.id}`}>
          <span className="material-icons mr-5 text-primary">edit</span>
        </Link>
        <Link>
          <span
            className="material-icons text-danger"
            onClick={() => dispatch(deleteCandidate(props.candidate.id))}
          >
            remove_circle
          </span>
        </Link>
      </td>
    </tr>
  );
}

export default Candidate;

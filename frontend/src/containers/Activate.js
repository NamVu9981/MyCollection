import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { verify } from "../actions/auth";

const Activate = ({ verify }) => {
  const [verified, setVerified] = useState(false);
  const { uid, token } = useParams();
  const verify_account = (e) => {
    verify(uid, token);
    setVerified(true);
    //login(email, password)
  };

  //Is the user authenciated
  // Redirect to front page
  if (verified) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container mt-5">
      <div
        style={{ marginTop: "200px" }}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <h1>Verify your Account:</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={verify_account}
          style={{ marginTop: "50px" }}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default connect(null, { verify })(Activate);

import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password_confirm } from "../actions/auth";

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { uid, token } = useParams();
  const onSubmit = (e) => {
    e.preventDefault();

    reset_password_confirm(uid, token, new_password, re_new_password);
    setRequestSent(true);
    //login(email, password)
  };

  //Is the user authenciated
  // Redirect to front page
  if (requestSent) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container mt-5">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-control">
          <input
            className="form-control"
            type="password"
            placeholder="New Password"
            name="new_password"
            value={new_password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          ></input>
        </div>
        <div className="form-control">
          <input
            className="form-control"
            type="password"
            placeholder="Confirm New Password"
            name="re_new_password"
            value={re_new_password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          ></input>
        </div>
        <button className="btn btn-primary" type="submit">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);

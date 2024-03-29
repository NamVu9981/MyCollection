import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions/auth";

const Signup = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { name, email, password, re_password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === re_password) {
      signup(name, email, password, re_password);
      setAccountCreated(true);
    }

    //login(email, password),
  };

  //Is the user authenciated
  // Redirect to front page
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  if (accountCreated) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="container mt-5">
      <h1>Sign Up</h1>
      <p>Create your Account</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-control">
          <input
            className="form-control"
            type="text"
            placeholder="Name*"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          ></input>
        </div>
        <div className="form-control">
          <input
            className="form-control"
            type="email"
            placeholder="Email*"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          ></input>
        </div>
        <div className="form-control">
          <input
            className="form-control"
            type="password"
            placeholder="Password*"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          ></input>
        </div>
        <div className="form-control">
          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
            name="re_password"
            value={re_password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          ></input>
        </div>
        <button className="btn btn-primary" type="submit">
          Sign up
        </button>
      </form>
      <p className="mt-3">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { signup })(Signup);

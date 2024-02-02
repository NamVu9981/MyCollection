import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { checkAuthenciated, load_user } from "../actions/auth";

const Layout = (props) => {
  useEffect(() => {
    props.checkAuthenciated();
    props.load_user();
  }, []);
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};

export default connect(null, { checkAuthenciated, load_user })(Layout);

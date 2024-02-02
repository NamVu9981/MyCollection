import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <Link className="btn btn-primary btn-lg" to="/login" role="button">
        Login
      </Link>
    </div>
  );
}

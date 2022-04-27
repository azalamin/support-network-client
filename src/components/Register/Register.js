import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../logos/logo.png";

const Register = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="text-center mt-5">
        <img
          className="cursor"
          onClick={() => navigate("/")}
          src={logo}
          alt=""
        />
      </div>
      <div
        style={{ minHeight: "350px", minWidth: "300px" }}
        className="w-50 border d-flex mx-auto flex-column mt-5 py-3 px-4"
      >
        <h3>Register as a Volunteer</h3>
      </div>
    </div>
  );
}

export default Register;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../logos/logo.png";

const Register = () => {
  const navigate = useNavigate();
  const [terms, setTerms] = useState(false);
  console.log(terms);
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
      <div className="mask d-flex align-items-center h-100 gradient-custom-3 pb-5">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Register as a Volunteer
                  </h2>

                  <form>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        required
                      />
                      <label className="form-label" htmlFor="form3Example1cg">
                        Full Name
                      </label>
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        required
                      />
                      <label className="form-label" htmlFor="form3Example3cg">
                        Username or Email
                      </label>
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type="date"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example4cg">
                        Date
                      </label>
                    </div>

                    <div className="form-outline mb-2">
                      <textarea
                        type="text"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                        required
                      />
                      <label className="form-label" htmlFor="form3Example4cdg">
                        Description
                      </label>
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="form3Example4cdg3"
                        className="form-control form-control-lg"
                        required
                      />
                      <label className="form-label" htmlFor="form3Example4cdg3">
                        Organize books at the library.
                      </label>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="form2Example3cg"
                        onChange={(e) => setTerms(e.target.checked)}
                      />
                      <label
                        className={`form-check-label ${
                          !terms ? "text-danger" : "text-dark"
                        }`}
                        htmlFor="form2Example3cg"
                      >
                        I agree all statements in <u>Terms of service</u>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block w-100 btn-lg gradient-custom-4 text-body"
                        disabled={!terms}
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <span
                        onClick={() => navigate("/login")}
                        className="fw-bold text-body cursor"
                      >
                        <u>Login here</u>
                      </span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../logos/logo.png";

const Register = () => {
  const navigate = useNavigate();
  const handleRegistration = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const date = event.target.date.value;
    const description = event.target.description.value;
    const organize = event.target.organize.value;
    const supporter = { name, email, date, description, organize };

    fetch("http://localhost:5000/supporter", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(supporter),
    })
      .then((res) => res.json())
      .then((data) => {
        toast('Registration Successful.');
        event.target.reset();
      });
  };
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
                    Register as a Supporter
                  </h2>

                  <form onSubmit={handleRegistration}>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        name="name"
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
                        name="email"
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
                        name="date"
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
                        name="description"
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
                        name="organize"
                        required
                      />
                      <label className="form-label" htmlFor="form3Example4cdg3">
                        Organize books at the library.
                      </label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block w-100 btn-lg gradient-custom-4 text-body"
                      >
                        Registration
                      </button>
                    </div>
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

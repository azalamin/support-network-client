import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../logos/logo.png";
import Loading from "../Loading/Loading";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
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
            className="w-50 border d-flex justify-content-center align-items-center mx-auto flex-column mt-5"
          >
            <h1>Login With</h1>
            <div onClick={() => signInWithGoogle()} className="google-btn mt-3">
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt=""
                />
              </div>
              <p className="btn-text">
                <b>Sign in with google</b>
              </p>
            </div>
            <p className="mt-2">
              <small>
                Don’t have an account?{" "}
                <span
                  onClick={() => navigate("/register")}
                  className="text-primary cursor"
                >
                  Create an account
                </span>
              </small>
            </p>
            {error ? (
              <small className="text-danger">{error.message}</small>
            ) : (
              ""
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Login;

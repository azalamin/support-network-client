import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={
            <RequireAuth>
              <Register />
            </RequireAuth>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

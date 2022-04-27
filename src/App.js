import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

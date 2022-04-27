import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Home.css";

const Home = () => {
  const [supports, setSupports] = useState([]);
  const colors = [
    "#FF6600",
    "#E74C3C",
    "#2E86C1",
    "#633974",
    "#633974",
    "#2E86C1",
    "#E74C3C",
    "#FF6600",
  ];
  let index = 0;
  
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setSupports(data));
  }, []);

  return (
    <>
      <Header />
      <div className="container mb-5">
        <div className="row">
          {supports.map((support) => (
            <div key={support.id} className="col-md-3 g-5">
              <div className="card-container">
                <div className="img-container">
                  <img className="img-fluid" src={support.img} alt="" />
                </div>
                <div
                  style={{ backgroundColor: colors[index++] }}
                  className="card-info"
                >
                  <h5>{support.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

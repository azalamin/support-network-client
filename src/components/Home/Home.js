import React, { useEffect, useState } from "react";

const Home = () => {
  const [supports, setSupports] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setSupports(data));
  }, []);
  return (
    <div className="container">
      <div className="row">
        {supports.map((support) => (
          <div key={support.id} className="col-md-3 g-5">
            <div>
              <div className="">
                <img className="img-fluid" src={support.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

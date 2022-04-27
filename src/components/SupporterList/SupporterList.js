import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../logos/logo.png";

const SupporterList = () => {
  const navigate = useNavigate();
  const [supporters, setSupporters] = useState([]);
  const [deleteSupporter, setSupporter] = useState({});

  useEffect(() => {
    fetch("https://aqueous-harbor-33681.herokuapp.com/supporter")
      .then((res) => res.json())
      .then((data) => setSupporters(data));
  }, [deleteSupporter]);

   const handleDeleteSupporter = (id) => {
     const deleteConfirm = window.confirm("Are your sure you want to delete?");
     if (deleteConfirm) {
       fetch(`https://aqueous-harbor-33681.herokuapp.com/supporter?eventId=${id}`, {
         method: "DELETE",
       })
         .then((res) => res.json())
         .then((data) => {
           toast("One item removed");
           setSupporter(data);
         });
     }
   };

  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-2">
            <img
              className="cursor"
              onClick={() => navigate("/")}
              src={logo}
              alt=""
            />
          </div>
          <div className="col-md-10 p-md-4 ">
            <h4>Supporter register list</h4>
            <div className="bg-light p-md-4">
              <div className="bg-white p-md-3 rounded-3">
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email ID</th>
                      <th>Registration date</th>
                      <th>Supporter list</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {supporters.map((supporter) => (
                    <tbody key={supporter._id} className="text-muted">
                      <tr>
                        <td>{supporter.name}</td>
                        <td>{supporter.email}</td>
                        <td>{supporter.date}</td>
                        <td>
                          <small>Organize books at the library.</small>
                        </td>
                        <td>
                          <button
                            onClick={() => handleDeleteSupporter(supporter._id)}
                            className="btn btn-sm btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupporterList;

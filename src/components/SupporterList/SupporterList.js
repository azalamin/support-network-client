import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../../logos/logo.png';

const SupporterList = () => {
    const navigate = useNavigate();
    return (
      <div>
        <div className="container">
          <div className="row py-5">
            <div className="col-md-3">
              <img
                className="cursor"
                onClick={() => navigate("/")}
                src={logo}
                alt=""
              />
            </div>
            <div className="col-md-9 p-md-4 ">
              <h4>Supporter register list</h4>
              <div className="bg-light p-md-4">
                <div className="bg-white p-md-3 rounded-3">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Registration date</th>
                        <th>Supporter list</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <td key={index}>Table cell {index}</td>
                        ))}
                      </tr>
                    </tbody>
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
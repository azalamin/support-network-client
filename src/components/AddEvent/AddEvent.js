import React from "react";
import logo from "../../logos/logo.png";

const AddEvent = () => {
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-3 vh-100">
          <img src={logo} alt="" />
        </div>
        <div className="col-9">
          <h4>Add Event</h4>
          <form className="bg-light vh-100 p-5">
            <div className="row bg-white rounded-3 p-3">
              <div className="col-6">
                <div className="form-group pb-3">
                  <label forhtml="exampleInputEmail1" className="form-label">
                    <strong>Event Title</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Event Title"
                  />
                </div>
                <div className="form-group">
                  <label forhtml="description" className="form-label">
                    <strong>Description</strong>
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Description"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group pb-3">
                  <label forhtml="date" className="form-label">
                    <strong>Event Date</strong>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="data"
                    placeholder="Event Date"
                    name="date"
                  />
                </div>
                <div className="form-group pb-3">
                  <label forhtml="banner" className="form-label">
                    <strong>Banner</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="banner"
                    placeholder="Photo URL"
                    name="image"
                  />
                </div>
              </div>
            </div>
            <div className="text-end mt-3">
              <button type="submit" className="btn btn-primary px-4">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;

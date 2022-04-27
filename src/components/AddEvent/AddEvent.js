import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../logos/logo.png";

const AddEvent = () => {
  const navigate = useNavigate();
  const handleSubmitEvent = (event) => {
    event.preventDefault();
    const eventTitle = event.target.title.value;
    const description = event.target.description.value;
    const date = event.target.date.value;
    const imgURL = event.target.image.value;
    const eventDetails = { eventTitle, description, date, imgURL };

    fetch("https://aqueous-harbor-33681.herokuapp.com/event", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Event added successfully");
        event.target.reset();
        console.log(data);
      });
  };
  
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-3 vh-100">
          <img
            className="cursor"
            onClick={() => navigate("/")}
            src={logo}
            alt=""
          />
        </div>
        <div className="col-9">
          <h4>Add Event</h4>
          <form onSubmit={handleSubmitEvent} className="bg-light vh-100 p-5">
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
                    name="title"
                    required
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
                    name="description"
                    required
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
                    required
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
                    required
                  />
                </div>
              </div>
            </div>
            <div className="text-end mt-3">
              <button type="submit" className="btn btn-primary px-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BookNav from "../BookNav/BookNav";

const BookingDetails = () => {
  const [events, setEvents] = useState([]);
  const [deleteEvent, setDeleteEvent] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/event")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, [deleteEvent]);

  const handleDeleteEvent = (id) => {
    const deleteConfirm = window.confirm("Are your sure you want to delete?");
    if (deleteConfirm) {
      fetch(`http://localhost:5000/event?eventId=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Deleted Event");
          setDeleteEvent(data);
        });
    }
  };

  return (
    <div>
      <BookNav></BookNav>
      <div className="container py-5">
        <div className="row">
          {events.map((e) => (
            <div key={e._id} className="col-md-6 pb-3">
              <div className="card p-3">
                <div className="row">
                  <div className="col-4">
                    <img
                      style={{ width: "200px", height: "150px" }}
                      className="img-fluid"
                      src={e.imgURL}
                      alt=""
                    />
                  </div>
                  <div className="col-8">
                    <h4>{e.eventTitle}</h4>
                    <p>
                      <strong>{e.date}</strong>
                    </p>
                    <p>{e.description}</p>
                    <div className="mt-5 text-end">
                      <button
                        onClick={() => handleDeleteEvent(e._id)}
                        className="btn btn-outline-danger"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;

import React, { useEffect, useState } from "react";
import BookNav from "../BookNav/BookNav";

const BookingDetails = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/supporter")
    .then(res => res.json())
    .then(data => setBookData(data))
  }, []);
  
  return (
    <div>
      <BookNav></BookNav>
      <h1>TOtal Booking: {bookData.length}</h1>
      <div className="container">
          <div className="row">
              {
                  bookData.map(book => <div key={book._id} className="col-md-6">
                      <div>
                          {book.name}
                      </div>
                  </div>)
              }
          </div>
      </div>
    </div>
  );
};

export default BookingDetails;

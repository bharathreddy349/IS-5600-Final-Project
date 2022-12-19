import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookUserList = () => {
  const [bookUsers, setBookUser] = useState([]);

  useEffect(() => {
    getBookUsers();
  }, []);

  const getBookUsers = async () => {
    const response = await axios.get("http://localhost:5000/bookuser");
    setBookUser(response.data);
  };

  const deleteBookUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/bookuser/${id}`);
      alert("Record deleted Successfully");
      getBookUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        {/* <Link to="/" className="button is-success">
          Home
        </Link>
        &nbsp;&nbsp;&nbsp; */}
        <Link to="/addbookUser" className="button is-success">
          Add Book User Record
        </Link>
        <p>
          ** If Book User List table is empty, Please add record by clicking on 'Add Book User Record'
        </p>

        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Book Name</th>
              <th>User Name</th>
              <th>Activity</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookUsers.map((bookUser, index) => (
              <tr key={bookUser._id}>
                <td>{index + 1}</td>
                <td>{bookUser.BookName}</td>
                <td>{bookUser.UserName}</td>
                <td>{bookUser.Activity}</td>
                <td>{bookUser.Date}</td>
                <td>
                  <Link
                    to={`editbookuser/${bookUser._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteBookUser(bookUser._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))

            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookUserList;

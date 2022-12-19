import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

const EditBookUser = () => {
    const [UserName, setName] = useState("");
    const [BookName, setBookName] = useState("");
    const [userlist, setuserlist] = useState([{ 'name': '', '_id': '' }]);
    const [booklist, setbooklist] = useState([{ 'name': '', '_id': '' }]);
    const [Activity, setActivity] = useState("");
    const [StartDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBookUserById();
    getUsers();
        getBooks();
  }, []);

  const getBookUserById = async () => {
    const response = await axios.get(`http://localhost:5000/bookuser/${id}`);
    setName(response.data.UserName);
    setBookName(response.data.BookName);
    setActivity(response.data.Activity);
    
  };

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
   
    const userslist = (JSON.parse(JSON.stringify(response.data)));

    setuserlist(userslist)

   };

const getBooks = async () => {
    const response = await axios.get("http://localhost:5000/books");

    const bookslist = (JSON.parse(JSON.stringify(response.data)));

    setbooklist(bookslist)

};

  const updateBookUser = async (e) => {
    e.preventDefault();
    try {
      let Date = JSON.stringify(StartDate).slice(1,11)
      console.log(Date);
      if (!BookName || !UserName || !Activity || !StartDate) {
            alert("Please fill out all fields")
            return 
         }
      await axios.patch(`http://localhost:5000/bookuser/${id}`, {
        UserName,
        BookName,
        Activity,
        Date
      });
      alert("Record Updated Successfully");
      navigate("/bookuserlist");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateBookUser}>
        <div className="field">
                        <label className="label">Book Name</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select
                                    value={BookName} required
                                    onChange={(e) => setBookName(e.target.value)}
                                >
                                    <option value="">-- Select Book --</option>

                                    {booklist.map(x => (
                                        <option value={x.name} key={x._id} >{x.name}</option>))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">User Name</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select
                                    value={UserName} required
                                    onChange={(e) => setName(e.target.value)}
                                >
                                    <option value="">-- Select User --</option>
                                    <option value="Anonymous">Anonymous</option>

                                    {userlist.map(x => (
                                        <option value={x.name} key={x._id} >{x.name}</option>))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Activity</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select
                                    value={Activity} required
                                    onChange={(e) => setActivity(e.target.value)}
                                >
                                    <option value="">-- Select Activity --</option>
                                    <option value="Rented">Rented</option>
                                    <option value="Purchased">Purchased</option>
                                    <option value="Donated">Donated</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Date</label>
                        <div className="control">

                            <DatePicker
                            selected={StartDate} onChange={(date) => setStartDate(date)} 
                            
                            />

                        </div>
                    </div>
                    
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBookUser;

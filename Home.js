import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';

import '../../src/App.css'


const Home = () => {





    return (



        <div className="columns mt-5">

            <div className="column is-half">

                <Link to="bookuserlist" className="button is-success" >
                    Book User List
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="addbookuser" className="button is-success" >
                    Add Book User Record
                </Link>

                <br />
                <br />

                <Link to="booklist" className="button is-success" >
                    Book List
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="addbook" className="button is-success" >
                    Add New Book
                </Link>

                <br />
                <br />

                <Link to="userlist" className="button is-success" >
                    User List
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="add" className="button is-success" >
                    Add New User
                </Link>
            </div>
        </div>


    );
};


export default Home;
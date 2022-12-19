import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';



const About = () => {



    return (
        <>
            <div className="container">
                <br />
                <p>
                    'Book Registry' is a Simple Book Mangement web application that has following features:
                </p>
                <br />
                <p>
                    <a>Book-User Database</a>
                    <br />
                    1. Maintaining complete record of users who Rented/Purchased/Donated books.
                    <br />
                    2. Add,update and delete the details of Book-User records.
                    <br />
                    <br />

                    <a>Book Database</a>
                    <br />
                    1. Maintaining complete record of books.
                    <br />
                    2. Add,update and delete the details of books.

                    <br />
                    <br />
                    <a> User Database</a>
                    <br />
                    1. Maintaining complete record of users.
                    <br />
                    2. Add,update and delete the details of users.



                </p>
            </div>
        </>
    );
};


export default About;
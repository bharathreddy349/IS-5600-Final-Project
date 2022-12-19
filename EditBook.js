import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBookById();
  }, []);

  const getBookById = async () => {
    const response = await axios.get(`http://localhost:5000/books/${id}`);
    setName(response.data.name);
    setAuthor(response.data.author);
    setPrice(response.data.price);
    setQuantity(response.data.quantity);
  };

  const updateBook = async (e) => {
    e.preventDefault();
    try {
      if (!name || !author || !price || !quantity) {
        alert("Please fill out all fields")
        return 
     }
      await axios.patch(`http://localhost:5000/books/${id}`, {
        name,
        author,
        price,
        quantity,
      });
      alert("Book details updated Successfully");
      navigate("/booklist");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateBook}>
          <div className="field">
            <label className="label">Book Name</label>
            <div className="control">
              <input
                type="text" required
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Book Author</label>
            <div className="control">
              <input
                type="text" required
                className="input"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Price</label>
            <div className="control">
              <input
                type="number" required min={0} step={0.01}
                className="input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Quantity</label>
            <div className="control">
              <input
                type="number" required min={1}
                className="input"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Quantity"
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

export default EditBook;

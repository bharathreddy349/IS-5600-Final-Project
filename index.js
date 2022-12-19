import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import BookRoute from "./routes/BookRoute.js";
import BookUserRoute from "./routes/BookUserRoute.js";

const app = express();
mongoose.connect('mongodb://0.0.0.0:27017/BookRegistry_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(BookRoute);
app.use(BookUserRoute);

app.listen(5000, ()=> console.log('Server up and running...'));
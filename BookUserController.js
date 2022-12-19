import BookUser from "../models/BookUserModel.js";

export const getBookUsers = async (req, res) => {
    try {
        const bookusers = await BookUser.find();
        res.json(bookusers);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getBookUserById = async (req, res) => {
    try {
        const bookuser = await BookUser.findById(req.params.id);
        res.json(bookuser);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const saveBookUser = async (req, res) => {
    const bookuser = new BookUser(req.body);
    try {
        const insertedbookuser = await bookuser.save();
        res.status(201).json(insertedbookuser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateBookUser = async (req, res) => {
    try {
        const updatedbookuser = await BookUser.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedbookuser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteBookUser = async (req, res) => {
    try {
        const deletedbookuser = await BookUser.deleteOne({_id:req.params.id});
        res.status(200).json(deletedbookuser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
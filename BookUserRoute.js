import express from "express";
import { 
    getBookUsers, 
    getBookUserById,
    saveBookUser,
    updateBookUser,
    deleteBookUser
} from "../controllers/BookUserController.js";

const router = express.Router();

router.get('/bookuser', getBookUsers);
router.get('/bookuser/:id', getBookUserById);
router.post('/bookuser', saveBookUser);
router.patch('/bookuser/:id', updateBookUser);
router.delete('/bookuser/:id', deleteBookUser);

export default router;
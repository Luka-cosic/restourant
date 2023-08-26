import express from 'express';
import { bookTable, fetchAll } from "../controllers/book.js";

const router = express.Router();

router.get('/fetchAll', fetchAll)
router.post("/table", bookTable );


export default router;
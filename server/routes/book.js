import express from 'express';
import { bookTable, fetchAll, delCard } from "../controllers/book.js";

const router = express.Router();

router.get('/fetchAll', fetchAll);
router.post("/table", bookTable );
router.post("/delCard", delCard);


export default router;
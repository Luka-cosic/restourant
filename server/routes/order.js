import express from 'express';
import { orderFood, deleteCard } from "../controllers/order.js";

const router = express.Router();

router.post("/", orderFood);
router.post("/delCard", deleteCard)


export default router;
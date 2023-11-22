import express from 'express';
import { orderFood, deleteCard, getAll } from "../controllers/order.js";

const router = express.Router();

router.post("/", orderFood);
router.post("/getAll", getAll);

router.post("/delCard", deleteCard);


export default router;
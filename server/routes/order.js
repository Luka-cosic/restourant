import express from 'express';
import {    orderFood } from "../controllers/order.js";

const router = express.Router();

router.post("/", orderFood);


export default router;
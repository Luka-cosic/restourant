import express from "express";
import { signUp, signIn, cart, getFromCart, delFromCart } from "../controllers/users.js";

const router = express.Router();

router.post("/newUser", signUp);
router.post("/signIn", signIn);
router.post("/cart", cart);
router.get("/:id", getFromCart);
router.post("/del", delFromCart);


export default router;
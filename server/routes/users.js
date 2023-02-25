import express from "express";
import { signUp, signIn } from "../controllers/users.js";

const router = express.Router();

router.post("/newUser", signUp);
router.post("/signIn", signIn)

export default router;
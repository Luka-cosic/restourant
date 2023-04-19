import express from 'express';
import { createMeal, fetchAll, likeMeal, deleteMeal, updateMeal, commentMeal } from "../controllers/meals.js";
import {auth} from "../middleware/auth.js";


const router = express.Router();


router.post("/", createMeal );

router.get("/fetchAll", fetchAll);
router.post("/:id/likeMeal", auth, likeMeal);
router.delete('/:id', deleteMeal);
router.patch("/", updateMeal);
router.post("/comments", commentMeal);

export default router;
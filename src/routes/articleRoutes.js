
import express from "express";
import { createArticle } from "../controller/articleController.js";

const router = express.Router()

router.post('/create',createArticle)



export default router;

import express from "express";
import { createArticle, deleteArticle, getAllArticle, getSingleArticle, updateArticle } from "../controller/articleController.js";

const router = express.Router()

router.post('/',createArticle)

//day 4 from here
router.get('/',getAllArticle)
router.get('/:id',getSingleArticle)
router.delete('/:id',deleteArticle)
router.patch('/update/:id',updateArticle)


export default router;
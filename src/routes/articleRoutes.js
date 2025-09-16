
import express from "express";
import { createArticle, deleteArticle, getAllArticle, getSingleArticle, updateArticle } from "../controller/articleController.js";
import { isLoggedIn } from "../middleware/auth.js";

const router = express.Router()

router.post('/',isLoggedIn,createArticle)


//day 4 from here
router.get('/',getAllArticle)
router.get('/:id',getSingleArticle)
router.delete('/:id',isLoggedIn,deleteArticle)
router.patch('/:id',isLoggedIn,updateArticle)






export default router;
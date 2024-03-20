import express from 'express';
import path from 'path';
import { uploadBlog } from '../controller/blogcontroller.js';

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: false}));

router.post('/uploadblog', uploadBlog);

export default router;
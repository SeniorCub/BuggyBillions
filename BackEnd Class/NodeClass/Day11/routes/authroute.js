import express from "express";
import { registerClient } from '../controller/authcontroller.js';
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.post('/signUp', registerClient);
export default router;
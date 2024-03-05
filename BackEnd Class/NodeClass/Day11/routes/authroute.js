import express from "express";
import { registerClient, loginClient } from '../controller/authcontroller.js';
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.post('/signUp', registerClient);
router.post('/login', loginClient);
export default router;
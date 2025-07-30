import { Router } from "express";
import { registerStudent } from '../controllers/authController.mjs';

const router = Router();
router.post('/register', registerStudent);

export default router;
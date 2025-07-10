import express from 'express'
import { signup, Login } from '../Controllers/authControllers.js'

const router = express.Router();

router.post('/signup', signup);
router.post('/login', Login);

export default router;


import express from 'express';
import { signup } from '../controllers/auth.controllers.js';

const router = express.Router();

// Corrected the route path to include a forward slash before 'signup'
router.post('/signup', signup);

export default router;
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import express from 'express';
import userRouter from './user.routes.js';
import movieRouter from './movie.routes.js';

const router = express.Router();
router.use('/users', userRouter);
router.use('/movies', movieRouter);
export default router;

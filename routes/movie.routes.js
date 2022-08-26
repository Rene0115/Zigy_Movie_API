import express from 'express';

const movieRouter = express.Router();

movieRouter.post('upload', movieController.upload)
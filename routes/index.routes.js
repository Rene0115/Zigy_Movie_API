import express from "express";
import videoRouter from "./video.routes.js";

const router = express.Router();
router.use("/movies", videoRouter);
export default router;

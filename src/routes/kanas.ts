import express from "express"
import KanaController from "../controllers/KanaController";

const router = express.Router()

router.get("/kanas", KanaController.index)

export default router;
import { Router } from "express";
import * as homeController from "../controllers/homeController"


const router = Router()

router.get('/', homeController.home)
router.get('/admin', homeController.admin)

export default router
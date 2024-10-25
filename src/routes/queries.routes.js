import { Router } from "express";
import { createQuery, getQueries } from "../controllers/queries.controllers.js";

const router = Router();

router.get('/queries', getQueries);

router.post('/queries', createQuery);

export default router;

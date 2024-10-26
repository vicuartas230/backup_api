import { Router } from "express";
import { createQuery, getContacts, getQueries } from "../controllers/queries.controllers.js";

const router = Router();

router.get('/queries', getQueries);

router.post('/queries', createQuery);

router.get('/contacts', getContacts);

export default router;

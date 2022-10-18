import { Router } from 'express';
import providerRouter from '../provider/router.js';

const router = Router();

router.use('/data', providerRouter);

export default router;

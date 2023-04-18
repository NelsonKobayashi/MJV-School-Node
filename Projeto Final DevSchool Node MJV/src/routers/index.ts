import { Router } from 'express';
import healthRouter from './health.router';
import userRouter from './user.router';
import choresRouter from './chores.router';

const router = Router();

router.use('/health', healthRouter); 
router.use('/user', userRouter); 
router.use('/chores', choresRouter);

export default router;
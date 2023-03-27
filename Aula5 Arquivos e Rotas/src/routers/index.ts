import { Router } from 'express';
import healthRouter from './health.router';

const router = Router();

router.use('/health', healthRouter); // sempre que digitar 'health' na rota, ele redireciona para o healthRouter.

export default router;
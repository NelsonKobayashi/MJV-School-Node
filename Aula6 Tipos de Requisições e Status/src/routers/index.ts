import { Router } from 'express';
import healthRouter from './health.router';
import studentsRouter from './students.router';
import productsRouter from './products.router';


const router = Router();

router.use('/health', healthRouter); // sempre que digitar 'health' na rota, ele redireciona para o healthRouter.
router.use('/students', studentsRouter); 
router.use('/products', productsRouter); 

export default router;
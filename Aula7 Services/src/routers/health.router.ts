import { Request, Response, Router } from 'express';


const router = Router();

router.get('/', (req: Request, res: Response) => {
    const healthCheck = { message: 'Aplicação funcionando com sucesso!' };
    res.send(healthCheck);
});

router.get('/check', (req: Request, res: Response) => {
    const healthCheck = { message: 'Aplicação funcionando que é uma beleza!' };
    res.send(healthCheck);
});

export default router;
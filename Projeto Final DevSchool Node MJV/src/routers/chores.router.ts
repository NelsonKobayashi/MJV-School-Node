import { Request, Response, Router} from 'express';
import ChoresService from '../services/chores.service';
import { authorizationMiddleware } from '../middlewares/authorization.middleware';

const router = Router();

router.get('/', authorizationMiddleware, async (req: Request, res: Response) => {
    const chores = await ChoresService.getAll();
    res.send(chores);
});

router.get('/:id', authorizationMiddleware, async (req: Request, res: Response) => {
    const chores = await ChoresService.getById(req.params.id);
    if(!chores) return res.status(400).send({ message: 'Tarefa não encontrada.'});
    res.status(200).send(chores);
});

router.post('/', authorizationMiddleware, async (req: Request, res: Response) => {
    await ChoresService.create(req.body);
    res.status(201).send({message: 'Tarefa adicionada com sucesso'});
    
});

router.delete('/remove/:id', authorizationMiddleware, async (req: Request, res: Response) => {
    try {
        await ChoresService.remove(req.params.id);
        res.status(200).send({message: 'Tarefa removida com sucesso.'});
    } catch(error: any) {   
        res.status(400).send({message: error.message});
    }      
});

router.put('/:id', authorizationMiddleware, async (req: Request, res: Response) => {
    try {
        await ChoresService.update(req.params.id, req.body);
        res.status(200).send({ message: "Tarefa atualizada com sucesso!" });
    }catch(error: any) {
        res.status(400).send({message: error.message});
    }   
});

export default router;
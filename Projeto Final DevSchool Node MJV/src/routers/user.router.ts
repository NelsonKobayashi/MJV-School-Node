import { Request, Response, Router} from 'express';
import UserService from '../services/user.service';
import { authorizationMiddleware } from '../middlewares/authorization.middleware';

const router = Router();
const { userValidate } = require('../config/validate');


router.get('/', authorizationMiddleware, async (req: Request, res: Response) => {
    const user = await UserService.getAll();
    res.status(200).send(user);
});

router.get('/:email', authorizationMiddleware, async (req: Request, res: Response) => {
    const user = await UserService.getByEmail(req.params.email);
    if(!user) return res.status(400).send({ message: 'Usuário não encontrado.'});
    res.status(200).send(user);
});

router.post('/', async (req: Request, res: Response) => {
    const { error } = await userValidate(req.body);
    if(error) {
        res.status(400).send({ message: error.message });
    } else {
        UserService.create(req.body);
        res.status(201).send({message: 'Usuário adicionado com sucesso'});        
    }
});

router.post('/authorization', async (req: Request, res: Response) => {
    try {
        const token = await UserService.authorization(req.body.email, req.body.password);
        res.status(200).send({ token });
    } catch (error: any) {
        res.status(401).send({ message: error.message});        
    }
});

router.delete('/remove/:email', authorizationMiddleware, async (req: Request, res: Response) => {
    try {
        await UserService.remove(req.params.email);
        res.status(200).send({message: 'Usuário removido com sucesso.'});
    } catch(error: any) {   
        res.status(400).send({message: error.message});
    }      
});

router.put('/:email', authorizationMiddleware, async (req: Request, res: Response) => {
    try {
        await UserService.update(req.params.email, req.body);
        res.status(200).send({ message: "Usuário atualizado com sucesso!" });
    }catch(error: any) {
        res.status(400).send({message: error.message});
    }   
});

export default router;
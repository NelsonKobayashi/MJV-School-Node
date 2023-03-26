import express from 'express';
import { Request, Response, Router } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const healthCheck = {message: "O exercício está indo de vento em polpa"};
    res.send(healthCheck);
})

app.use(router);

const port = 3000;

app.listen(port, () => {
    console.log(`Exercício rodando normalmente no endereço http://localhost:${port}`);
});
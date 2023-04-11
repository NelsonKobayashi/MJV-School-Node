import { Request, Response, Router } from 'express';
import ProductService from '../services/product.service';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const products = ProductService.getAll();
    res.send(products);
});

router.get('/:id', (req: Request, res: Response) => {
   const product = ProductService.getById(req.params.id);
   if(!product) return res.status(400).send({message: 'Produto não encontrado.'});
   res.status(200).send(product);
})

router.post('/', (req: Request, res: Response) => {
   const body = req.body;
   if(Object.entries(body).length == 0 ) {
      return res.status(401).send({message: 'O corpo veio vazio.'});
   }   
   ProductService.create(req.body);
   res.status(200).send({message: 'Produto adicionado com sucesso!'});
})

router.delete('/remove/:id', (req: Request , res: Response) => {
   try {
      ProductService.remove(req.params.id);
      res.status(200).send({message: 'Produto removido com sucesso!'});
   } catch(error: any) {
      res.status(400).send({message: error.message});
   }
});

router.put('update/:id', (req: Request, res: Response) => {
   try{
      ProductService.update(req.params.document, req.body);
      res.status(200).send({message: 'Produto atualizado com sucesso!'});
   } catch (error: any) {
      res.status(400).send({message: error.message});
   }
}); 

export default router;
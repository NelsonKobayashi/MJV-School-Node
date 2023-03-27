import { Request, Response, Router} from 'express';


const router = Router();

const students = [
    {
        name : 'Nelson Kobayashi',
        email : 'nelson@gmail.com',
        document: '86504072000',
        password : '123456',
        age : '41'
    },
    {
        name : 'Háruka Kobayashi',
        email : 'haruka@gmail.com',
        document: '48411305007',
        password : '123456',
        age : '9'
    },
    {
        name : 'Ethan Kobayashi',
        email : 'ethan@gmail.com',
        document: '68429378090',
        password : '123456',
        age : '3'
    },
    {
        name : 'Miyuki Kobayashi',
        email : 'miyuki@gmail.com',
        document: '82101044030',
        password : '123456',
        age : '39'
    },
    {
        name : 'Luke Skywalker',
        email : 'luke@gmail.com',
        document: '37991146022',
        password : '123456',
        age : '1'
    },
];

router.get('/', (req: Request, res: Response) => {
    res.send(students);
});

router.get('/:document', (req: Request, res: Response) => {
    const student = students.find((student) => student.document === req.params.document);
    if(!student) return res.status(400).send({ message: 'Estudante não encontrado.'});
    res.status(200).send(student);
});


router.post('/', (req: Request, res: Response) => {
    if (req.body.age < 18) {
        return res.status(401).send({message: 'Estudante com idade mínima fora do range. (somente acima de 18)'})
    }
    students.push(req.body);
    res.status(201).send({message: 'dados recebidos com sucesso'});
}) 

router.delete('/remove/:document', (req: Request, res: Response) => {
    const studentIndex = students.findIndex((student) => student.document === req.params.document);
    if (studentIndex === -1) {
        return res.status(400).send({message: 'Estudante não encontrado.'});
    }
    students.splice(studentIndex, 1);
    res.status(200).send({message: 'Estudante removido com sucesso.'});
})

router.put('/:document', (req: Request, res: Response) => {
    const studentIndex = students.findIndex((student) => student.document === req.params.document);
    if (studentIndex === -1) {
        return res.status(400).send({message: 'Estudante não encontrado.'});
    }
    students[studentIndex] = req.body;
    res.status(200).send({ message: "Estudante atualizado com sucesso!" });

});


export default router;
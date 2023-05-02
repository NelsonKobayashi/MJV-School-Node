import express from 'express';
import { Request, Response, Router } from 'express';
import cors from 'cors';
import routes from './routers';
import connection from './config/database';

import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


const port = 3000;

connection.then(() => {
    console.log('Banco de Dados conectado!');
    app.listen(port, () => {
        console.log("Aplicação online na porta: ", port);
    });
}).catch((err) => console.log("Error: ", err));
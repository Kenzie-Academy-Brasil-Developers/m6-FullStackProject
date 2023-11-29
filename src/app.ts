import 'express-async-errors';
import express, { Application, json } from 'express';
import "dotenv/config";
import middlewares from './middlewares';
import routers from './routers';
import cors from 'cors';

const app: Application = express();
app.use(cors());
app.use(json());


app.use('/login', routers.loginRouter)
app.use('/client', routers.clientRouter)
app.use('/contact', routers.contactRouter)




app.use(middlewares.handleError);

export default app
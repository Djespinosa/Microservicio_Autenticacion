import express from 'express'
import morgan from 'morgan'

import { createRoles } from './libs/initialSetUp';

import authRoutes from './routes/auth.routes' 

const app = express();
createRoles();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) =>{
    res.json('Welcome')
});

app.use('/auth', authRoutes);

export default app;
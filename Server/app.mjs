import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import connectToDatabase from './lib/mongoDB.mjs';
connectToDatabase()

import { registerStudent } from './controllers/authController.mjs';

const app = express();
const PORT = 3000;

app.use(cors({
    origin:'http://127.0.0.1:5500',
    credentials: true,
    method: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hello World");
});

app.use('/api/auth/', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); 
});
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';


dotenv.config();

const app = express();
const PORT = 4000;

app.use(cors({
    origin:'hhtp://127.0.0.1:5500',
    credentials: true,
    method: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(express.json)

app.get("/", (req, res) =>{
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); 
});
import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).send({ message: "Task Manager API is running" });
});

app.listen(PORT, () => {
    console.log(`🚀 Server is flying at http:\\localhost:${PORT}`);
});
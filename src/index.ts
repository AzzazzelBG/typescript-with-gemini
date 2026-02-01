import express, { Request, Response } from 'express';
import { getAllTasks, getTask } from './controllers/taskController';
import { TaskSchema, Task } from './models/TaskSchema';
import { DataService } from './models/DataService';

const app = express();
const PORT = 3000;

const taskService = new DataService<Task>(TaskSchema);

taskService.add({ id: 1, title: "Do laundry", completed: false });

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).send({ message: "Task Manager API is running" });
});

app.get('/task', getTask);
app.get('/tasks', getAllTasks);

app.listen(PORT, () => {
    console.log(`🚀 Server is flying at http:\\localhost:${PORT}`);
});
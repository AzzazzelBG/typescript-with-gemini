import express, { Request, Response } from 'express';
import { globalErrorHandler } from './middleware/errorHandler';
import { taskRoutes } from './routers/taskRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.use(globalErrorHandler);

app.listen(PORT, () => {
    console.log(`🚀 Server is flying at http:\\localhost:${PORT}`);
});
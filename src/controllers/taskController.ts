import { Request, Response } from "express";
import { ApiResponse } from "../models/ApiResponse";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export const getTask = (req: Request, res: Response) => {
    const task: Task = { id: 1, title: "Learn Generics", completed: false };

    const response: ApiResponse<Task> = {
        success: true,
        data: task,
        timestamp: new Date().toISOString()
    };

    res.json(response);
};

export const getAllTasks = (req: Request, res: Response) => {
    const tasks: Task[] = [
        { id: 1, title: "Learn Generics", completed: false },
        { id: 2, title: "Build API", completed: true },
    ];

    const response: ApiResponse<Task[]> = {
        success: true,
        data: tasks,
        timestamp: new Date().toISOString()
    };

    res.json(response);
};
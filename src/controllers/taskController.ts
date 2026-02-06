import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../models/ApiResponse";
import { TaskSchema } from "../models/TaskSchema";
import { formatZodError } from "../utils/formatErrors";
import { DataService } from "../models/DataService";
import { catchAsync } from "../utils/catchAsync";
import { success } from "zod";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const taskService = new DataService(TaskSchema);

export const createTask = catchAsync(async (req, res, next) => {
    taskService.add(req.body);

    res.status(201).json({
        success: true,
        message: "Task created!"
    });
});

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
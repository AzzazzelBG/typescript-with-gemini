import { Request, Response, NextFunction } from "express";
import { success, ZodError } from "zod";
import { formatZodError } from "../utils/formatErrors";

export const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let statusCode = err.statusCode || 500;
    let response = {
        success: false,
        message: err.message || "Internal Server Error",
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    };

    if (err instanceof ZodError) {
        statusCode = 400;
        response.message = "Validation Error";
        (response as any).errors = formatZodError(err);
    }

    res.status(statusCode).json(response);
};
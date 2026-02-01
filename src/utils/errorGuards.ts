import { ApiError } from '../models/ApiError';

export function isApiError(error: any): error is ApiError {
    return (
        error !== null &&
        typeof error === 'object' &&
        'code' in error &&
        'message' in error
    );
}
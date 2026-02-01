import { z } from 'zod';
import { TaskSchema } from './TaskSchema';

export class DataService<T extends { id: number }> {
  private items: T[] = [];

  constructor(private schema: z.ZodSchema<T>) { }

  add(item: T): void {
    try {
      const validateSchema = this.schema.parse(item);
      this.items.push(validateSchema);
      console.log('Successfully added item!');
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Validation failed:', error.issues)
      }
      throw error;
    }
  }

  getAll(): T[] {
    return [...this.items];
  }

  getById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}

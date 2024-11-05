import { z } from 'zod';

export const formSchema = z.object({
	content: z.string().trim()
});


export type FormSchema = typeof formSchema;

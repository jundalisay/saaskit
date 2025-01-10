import { z } from 'zod';

export const itemformSchema = z.object({
	name: z.string().trim(),
	description: z.string().trim(),
	// email: z.string().email(),
	points: z.coerce.number(),
	// price: z.number(),	
	city: z.string().trim(),
	photo: z.string().trim(),
	// photo1: z.string().trim(),
	// photo2: z.string().trim(),
	// photo3: z.string().trim()
});

export type ItemFormSchema = typeof itemformSchema;

import { z } from 'zod';

export const orgformSchema = z.object({
	name: z.string().trim()
});


export type OrgFormSchema = typeof orgformSchema;

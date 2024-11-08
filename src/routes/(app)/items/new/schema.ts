import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().trim().nullable(),
});

export type InfoFormSchema = typeof infoFormSchema;

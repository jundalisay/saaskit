import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
// import { message, superValidate } from 'sveltekit-superforms';
// import { zod } from 'sveltekit-superforms/adapters';
// import { formSchema } from './schema';


export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.safeGetSession();

	let items;

	const { data } = await locals.supabase.from('items').select('*');
	
	items = data;

	console.log('Products: ', items);

	return { items };
};



import type { PageServerData } from './$types';
import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
// import { message, superValidate } from 'sveltekit-superforms';
// import { zod } from 'sveltekit-superforms/adapters';
// import { formSchema } from './schema';


export const load: PageServerData = async ({ locals, url }) => {
	const { user } = await locals.safeGetSession();

	const q = String(url.searchParams.get('q')).trim();
	const { data } = await locals.supabase.from('items').select('*');

	// const { searched } = await data.findMany({
	// 	where: {
	// 		OR: [
	// 			{ name: { contains: q } },
	// 			{ descrption: { contains: q } }
	// 		]
	// 		// AND: [
	// 		// 	{ authorId: locals.user.id },
	// 		// ]
	// 	},
	// 	take: 10,
	// 	orderBy: [{ id: 'desc' }]
	// });	

	// data in PageServerLoad is all 
	console.log('Page Server Ts items comma: ', data);

	// console.log('Searched is: ', searched);	

	// tell the client that items means the stuff queried from the db
	return { items: data, q };
};


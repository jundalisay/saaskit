import type { PageServerData } from './$types';
import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import type { PageServerData } from "./$types";


// import { message, superValidate } from 'sveltekit-superforms';
// import { zod } from 'sveltekit-superforms/adapters';
// import { formSchema } from './schema';

export const load: PageServerData = async ({ params, locals }) => {

	const { id } = params;
	const { user } = await locals.safeGetSession();

	console.log('ID: ' + id);

	// let item;

	// const { data, error } = await locals.supabase.from('items').select('*').eq('id', id).single();
    // if (error) {return { status: 404, error: new Error('Item not found') };}

	const { data } = await locals.supabase.from('items').select('*').eq('id', id).single();    

	console.log('Page Server Ts item show: ', data);
	
	return { item: data };

	// console.log('Product user: ' + data.user_id);	
	// console.log('User: ' + user.email);	

    // return { item: { name: data.name, id: data.id } } // Return the fetched item as props

	// item = data;

	// console.log('Page.Server.Ts: ' + data.name);

	// return { item: { name: data.name }};
};


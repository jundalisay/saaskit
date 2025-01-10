import type { PageServerData } from './$types';
import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import type { PageServerData } from "./$types";
import { redirect } from '@sveltejs/kit';

import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { itemformSchema } from '$lib/schemas/item';



export const load: PageServerData = async ({ params, locals }) => {

	const { id } = params;
	const { user } = await locals.safeGetSession();

	console.log('ID: ' + id);

	// const { data, error } = await locals.supabase.from('items').select('*').eq('id', id).single();
    // if (error) {return { status: 404, error: new Error('Item not found') };}

	const { data } = await locals.supabase.from('services').select('*').eq('id', id).single();    

	console.log('Page Server Ts item show: ', data);
	
	return { item: data };
};



export const actions: Actions = {
	default: async (event) => {

		const { user } = await event.locals.safeGetSession();

		console.log('2: Service Role..');

		const supabaseServiceRole = event.locals.supabaseServiceRole;
		
		console.log('3. supabaseServiceRole:');

		const form = await superValidate(event, zod(itemformSchema));
		if (!form.valid) {return fail(400, {form,});}

		console.log('4. Form:');

		const { name, description, location, photo } = form.data;
		// points,
		console.log('5. Data:', form.data);

		const insert = supabaseServiceRole.from('items').insert({
			user_id: user.id,
			name, description, location, photo, 
			created_at: new Date(),
		});

		let error: PostgrestError | null = null;
		
		try {
			[/*result,*/ { error }] = await Promise.all([/*send, */ insert ]);
		} catch (e) {
			console.warn("Couldn't insert.", e);
			if (!error) {console.info(`Success!`,);}
		}
		return redirect(303, '/items');
	},
};

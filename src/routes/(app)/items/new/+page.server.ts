import { redirect } from '@sveltejs/kit';
import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { itemformSchema } from './schema';


export const load: PageServerLoad = async ({ locals }) => {

	return {form: await superValidate(zod(itemformSchema)),};

};


export const actions: Actions = {
	default: async (event) => {

		console.log('001');

		const { user } = await event.locals.safeGetSession();

		console.log('002');

		const supabaseServiceRole = event.locals.supabaseServiceRole;
		
		console.log('003');

		const form = await superValidate(event, zod(itemformSchema));
		if (!form.valid) {return fail(400, {form,});}

		console.log('004');

		const { name, description, points} = form.data;

// " decimal,
//   "price" decimal,
//   "region" text,
//   "city" text,
//   "photo" text,
//   "photo1" text,
//   "photo2" text,
//   "photo3" text,


		console.log('005 Content:', name);

		const insert = supabaseServiceRole.from('orgs').insert({
			owner_id: user.id,
			user_id: user.id,
			name: name,
			created_at: new Date(),
		});

		let error: PostgrestError | null = null;
		
		try {
			[/*result,*/ { error }] = await Promise.all([/*send, */ insert]);
		} catch (e) {
			console.warn("Couldn't post.", e);
			if (!error) {console.info(`Success!`,);}
		}
		// return message(form);
		return redirect(303, '/orgs');
	},
};

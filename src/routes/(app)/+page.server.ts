import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from './schema';


// export const load: ServerLoad = async () => {
export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.safeGetSession();
	// const { data } = await locals.supabase.from('posts').select('*');

  // const data = [
  //   {
  //     employeeId: 1,
  //     month: '2024-01',
  //     carbonEmission: 100,
  //     pesosSpent: 200,
  //     products: [
  //       { name: 'Product A', carbon: 50, cost: 100 },
  //       { name: 'Product B', carbon: 30, cost: 70 },
  //     ],
  //     services: [
  //       { name: 'Service A', carbon: 20, cost: 30 },
  //       { name: 'Service B', carbon: 10, cost: 10 },
  //     ],
  //   },
  //   // More employees...
  // ];
	const { data } = await locals.supabase.from('profiles').select('*');

  return { data };


	// // return {posts: data, form: await superValidate(zod(formSchema)),};
	// return {data, form: await superValidate(zod(formSchema)),};	
};



export const actions: Actions = {
	default: async (event) => {
		console.log('1: Starting Action..');

		const { user } = await event.locals.safeGetSession();

		// console.log('2: User:', user);

		const supabaseServiceRole = event.locals.supabaseServiceRole;
		
		// console.log('3: ServiceRole:', supabaseServiceRole);

		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {return fail(400, {form,});}

		console.log('4: Form:', form);

		// console.log('Form Data:', form.data); // Debugging line

		const { content } = form.data;

		console.log('5: Content:', content);

		// let d = new Date();
		// let n = d.toString(36);
		const thingtobeinserted = supabaseServiceRole.from('posts').insert({
			user_id: user.id,
			content: content,
			updated_at: new Date(),
		});

		let error: PostgrestError | null = null;
		
		try {
			[/*result,*/ { error }] = await Promise.all([/*send, */ thingtobeinserted]);
		} catch (e) {
			console.warn("Couldn't post.", e);
			if (!error) {console.info(`Success!`,);}
		}

		return message(form);
	},
};


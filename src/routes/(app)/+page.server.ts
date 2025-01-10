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
	    // console.log('Form Valid:', form.valid);

		const { content } = form.data;

		console.log('5: Content:', content);

		// const bigIntTimestamp = BigInt(Date.now()); // Get current timestamp as BigInt
		// const dataToSend = {
		//   timestamp: bigIntTimestamp.toString(), // Convert to string
		// };
		// const jsonData = JSON.stringify(dataToSend);
		// console.log(jsonData); // This will work without errors

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

		// if (error) {
		// 	console.error('Error posting to the database: ', error,);
		// 	console.error(`Post was not saved`,);
		// }

		return message(form);
	},
};

// import { fail, redirect } from '@sveltejs/kit';
// import { message, setError, superValidate } from 'sveltekit-superforms';
// import { zod } from 'sveltekit-superforms/adapters';
// import type { PageServerLoad } from './$types';
// import {
// 	infoFormSchema,
// } from './schema';


// export const actions = {
// 	submitPost: async (event) => {
// 		const { safeGetSession, supabase } = event.locals;
// 		const { session } = await safeGetSession();
// 		if (!session) {
// 			redirect(303, '/login');
// 		}
// 		const form = await superValidate(event, zod(emailFormSchema));
// 		if (!form.valid) {
// 			return fail(400, {
// 				emailForm: form,
// 			});
// 		}

//     if (!newPost) return;

    // let { data, error } = await supabase
    //   .from('posts')
    //   .insert([{ content: newPost }]);

    // if (error) console.log('Error submitting post:', error);
    // else {
    //   posts = [data[0], ...posts];
    //   newPost = '';
    // }
		// const { post } = newPost;

		// Supabase does not change the email until the user verifies both
		// if 'Secure email change' is enabled in the Supabase dashboard
		// const { error } = await supabase.auth.updateUser({ post });

		// if (error) {
		// 	console.error(error);
		// 	return setError(post, '', 'Error. Please try again.');
		// }

		// return message(form, {
		// 	success:
		// 		'An email has been sent to both your old and new email addresses. Please follow instructions in both.',
		// });
// 	}
// };

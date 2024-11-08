import type { PageServerData } from './$types';
import type { PageServerLoad } from './$types';
import type { PostgrestError } from '@supabase/supabase-js';
import { fail, redirect, type Actions, type ServerLoad } from '@sveltejs/kit';

import { message, setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import {formSchema} from './schema';


export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.safeGetSession();

	// get profile name into `info``
	let info;
	if (user) {
		const { data, error } = await locals.supabase
			.from('profiles')
			.select('name')
			.eq('id', user.id)
			.single();
		if (error) {
			console.error('Error getting profile info:', error.message);
			throw fail(500, { error: 'Could not get profile info.' });
		}
		info = data;
	}


	let name = '';
	let description = '';
	let points = 0;
	let price = 0;
	let location = '';
	let photoUrls = ['', '', '', '']; // Array to hold up to 4 photo URLs
	let errorMessage = '';

	// const createItem = async () => {

	// 	// Validate the input
	// 	if (!name || !description || !location || photoUrls.every(url => !url)) {
	// 	  errorMessage = 'Please fill in all required fields and provide at least one photo URL.';
	// 	  return;
	// 	}
};


export const actions: Actions = {default: async (event) => {

	const { safeGetSession, supabase } = event.locals;
	const { session } = await safeGetSession();
	if (!session) {
		redirect(303, '/login');
	}

	const form = await superValidate(event, zod(formSchema));
	if (!form.valid) {return fail(400, {emailForm: form,});}

	const { item } = form.data;

	const { error } = await locals.supabase.from('items').insert({
	  name,
	  description,
	  points,
	  price,
	  location,
	  photo: photoUrls[0],
	  photo1: photoUrls[1],
	  photo2: photoUrls[2],
	  photo3: photoUrls[3],
	});

	if (error) {
		console.error(error);
		return setError(form, '', 'Could not sign up. Please try again.');
	} else {
	  goto('/items');
	}

	return message(form, {success: 'Info updated.',});

	redirect(302, `/${item.id}`);	
}};


// import { fetchCurrentUsersSubscription } from '$lib/stripe/client-helpers';
import { fail, redirect } from '@sveltejs/kit';
import { message, setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';
import {
	infoFormSchema,
} from './schema';


export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.safeGetSession();

	let bunch;

	const { data } = await locals.supabase.from('posts').select('*');
	bunch = data;
	return { bunch: bunch };
};

export const actions = {
	updateProfile: async (event) => {
		const { safeGetSession, supabase } = event.locals;
		const { session, user } = await safeGetSession();
		if (!session || !user?.id) {
			return redirect(303, '/login');
		}

		const form = await superValidate(event, zod(infoFormSchema));
		if (!form.valid) {
			return fail(400, {
				infoForm: form,
			});
		}

		const { name } = form.data;

		const { error } = await supabase.from('profiles').upsert({
			id: user.id,
			name,
			updated_at: new Date(),
		});

		if (error) {
			console.error('Error updating profile:', error.message);
			return setError(form, '', 'Could not update info. Please try again.');
		}

		return message(form, {
			success: 'Info updated.',
		});
	},
};

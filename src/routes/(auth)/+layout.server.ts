import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({url, locals: { safeGetSession },}) => {
	const { session } = await safeGetSession();

	// if the user is already logged in return them to the account page
	if (session) {
		// redirect(303, '/dashboard');
		redirect(303, '/');		
	}

	return {
		session: session,
		url: url.origin,
	};
};

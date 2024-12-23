import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type PageServerData, type Actions, type ServerLoad } from '@sveltejs/kit';


export const load: PageServerData = async ({ locals, url }) => {
	const { user } = await locals.safeGetSession();

	// const q = String(url.searchParams.get('q')).trim();
	const { data } = await locals.supabase.from('orgs').select('*');

	// data in PageServerLoad is all 
	// console.log('Page Server Ts orgs index: ', data);

	// orgs: tell the client that items means the stuff queried from the db
	return { data };
	// , user
};



export const actions: Actions = {
	del: async (event) => {
		const { safeGetSession, supabase, supabaseServiceRole } = event.locals;

		const { session, user } = await safeGetSession();
		
		if (!session || !user?.id) {return redirect(303, '/login');}

		const form = await superValidate(event, zod(deleteAccountFormSchema));
		if (!form.valid) {return fail(400, {deleteAccountForm: form, }); }

		const { id } = form.data;

		const insert = supabaseServiceRole.from('orgs').delete().eq('id', id);

		redirect(303, '/register?alertDialog=account-deletion');
	},

};

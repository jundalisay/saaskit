import type { PageServerData } from './$types';
import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';


export const load: PageServerData = async ({ locals, url }) => {
	const { user } = await locals.safeGetSession();

	const q = String(url.searchParams.get('q')).trim();
	// const { data } = await locals.supabase.from('users').select('*');

	const { data } = await locals.supabase.from('profiles').select('*');
	// const { data } = await locals.supabase.auth.admin.listUsers()

	// data in PageServerLoad is all 
	console.log('Page Server Ts data: ', data);
	// console.log('Page Server Ts users: ', data.users);

	return { profiles: data, q };
	// tell the client that items means the stuff queried from the db
	// return { users: data, q };
};


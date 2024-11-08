import type { PageServerData } from './$types';
import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';


export const load: PageServerData = async ({ locals, url }) => {
	const { user } = await locals.safeGetSession();

	const { data } = await locals.supabase.from('transactions').select('*');

	// data in PageServerLoad is all 
	console.log('Page Server Ts transactions: ', data);

	// tell the client that items means the stuff queried from the db
	return { transactions: data };
};

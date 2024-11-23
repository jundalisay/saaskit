// import type { PostgrestError } from '@supabase/supabase-js';
// import { fail, type PageServerData, type Actions, type ServerLoad } from '@sveltejs/kit';


// export const load: PageServerData = async ({ locals, url }) => {
// 	const { user } = await locals.safeGetSession();

// 	const q = String(url.searchParams.get('q')).trim();
// 	const { data } = await locals.supabase.from('orgs').select('*');

// 	// data in PageServerLoad is all 
// 	console.log('Page Server Ts orgs index: ', data);

// 	// tell the client that items means the stuff queried from the db
// 	return { orgs: data, q };
// };


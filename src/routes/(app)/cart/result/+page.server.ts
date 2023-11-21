import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type PageServerData, type Actions, type ServerLoad } from '@sveltejs/kit';


export const load: PageServerData = async ({ locals, url }) => {
	const { user } = await locals.safeGetSession();

	// return { };
};


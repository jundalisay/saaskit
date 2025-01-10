import { redirect } from '@sveltejs/kit';
import type { PostgrestError } from '@supabase/supabase-js';
import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import  from './schema';
import { orgformSchema } from '$lib/schemas/orgschema';


export const load: PageServerData = async ({ params, locals }) => {

	// get id that was passed 
	const { id } = params;
	const { user } = await locals.safeGetSession();

	console.log('ID: ' + id);

	const { data } = await locals.supabase.from('orgs').select('*').eq('id', id).single();    

	console.log('Page Server Ts org edit: ', data);
	
	return {form: await superValidate(zod(orgformSchema)),data};
};



// export const actions = {
// 	default: async ({ request, params }) => {
// 		const data = Object.fromEntries(await request.formData());

// 		const title = data.title as string;
// 		const content = data.content as string;
// 		const tagcsv = data.tagcsv as string;
// 		const file = data.file as File;

// 		if (title.length == 0) {
// 			return fail(400, {
// 				error: true,
// 				message: 'Field <strong>Title</strong> cannot be blank.'
// 			});
// 		}

// 		const post = await db.post.findUnique({
// 			where: {
// 				id: Number(params.id)
// 			}
// 		});


// 		let filename = post?.photo;

// 		if (file.size > 0) {
// 			const date = new Date().toISOString()
// 				.replaceAll('-', '')
// 				.replaceAll(':', '')
// 				.replace(/T/, '')
// 				.replace(/\..+/, '');

// 			filename = date + '-' + slugify(file.name.toLowerCase());

// 			writeFileSync(`static/images/${filename}`, Buffer.from(await file.arrayBuffer()));
// 		}


// 		const ids = await getTagIds(tagcsv);

// 		await db.post.update({
// 			where: { id: Number(params.id) },
// 			data: {
// 				title: title.trim(),
// 				photo: filename,
// 				slug: slugify(title.toLowerCase()),
// 				content: content.trim(),
// 				tags: {
// 					set: [...ids]
// 				}
// 			}
// 		});

// 		redirect(302, `/${post?.id}/${post?.slug}`);
// 	}
// } satisfies Actions;
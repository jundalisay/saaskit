<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import {
		superForm,
		type Infer,
		type SuperValidated,
	} from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import LoaderCircle from '~icons/lucide/loader-circle';
	import { formSchema, type FormSchema } from './schema';

	export let data: SuperValidated<Infer<FormSchema>>;
	
	const form = superForm(data, {validators: zodClient(formSchema),});

	const { form: formData, enhance, submitting, message } = form;
</script>



<form method="POST" use:enhance class="grid gap-4">
	{#if $message?.success}
		<p class="text-sm text-green-700">{$message.success}</p>
	{:else}
		<Form.Errors {form} />

		<Form.Field {form} name="content">
			<Form.Control let:attrs>
				<Textarea
					rows={10}
					{...attrs}
					placeholder="Write a post"
					bind:value={$formData.content}
				/>
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<Form.Button class="w-full" disabled={$submitting}>
			{#if $submitting}
				<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
				Posting...
			{:else}
				Post
			{/if}
		</Form.Button>
	{/if}
</form>

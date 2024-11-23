<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import {superForm, type Infer, type SuperValidated, } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { orgformSchema, type OrgFormSchema } from './schema';

	export let data: SuperValidated<Infer<OrgFormSchema>>;
	
	const form = superForm(data, {validators: zodClient(orgformSchema),});

	const { form: formData, enhance, submitting, message } = form;
</script>



<form method="POST" use:enhance class="grid gap-4">
	{#if $message?.success}
		<p class="text-sm text-green-700">{$message.success}</p>
	{:else}
		<Form.Errors {form} />

		<Form.Field {form} name="name">
			<Form.Control let:attrs>
				<Input				
					{...attrs}
					placeholder="Write a name"
					bind:value={$formData.name}
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

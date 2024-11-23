<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import OrgForm from './org-form.svelte';

  export let data;

</script>


<svelte:head>
  <title>New Org</title>
</svelte:head>

<div class="container md:w-[800px] px-8 mx-auto"> 

  <Card.Root class="mx-auto">
    <Card.Header>

    </Card.Header>
    <Card.Content class="flex flex-col gap-4">
      <OrgForm data={data.form} />
    </Card.Content>
  </Card.Root>
  
</div>


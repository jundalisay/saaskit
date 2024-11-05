<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import PostForm from './post-form.svelte';

  export let data;
  
</script>


<svelte:head>
  <title>Posts</title>
</svelte:head>

<div class="container md:w-[800px] px-8 mx-auto"> 

  {#if data.bunch}

    {#each data.bunch as post}
    <Card.Root class="mb-4">
      <Card.Header>
        <Card.Description>
        <!-- {post} -->
        <p>{post.content}</p>
        <small class="text-gray-500">{new Date(post.created_at).toLocaleString()}</small>
      
        </Card.Description>
      </Card.Header>
    </Card.Root>
    {/each}

  {/if}

  <Card.Root class="mx-auto">
    <Card.Header>
  <!--     <Card.Title tag="h1" class="text-2xl">Contact Us</Card.Title>
      <Card.Description>Let us know how we can help you.</Card.Description> -->
    </Card.Header>
    <Card.Content class="flex flex-col gap-4">
      <PostForm data={data.form} />
    </Card.Content>
  </Card.Root>
</div>

<!--   <div class="text-center gap-3">
    <Card.Title>Posts</Card.Title>
  </div> -->
<!-- 

    <div class="bg-white p-4 rounded shadow-md">
      <form on:submit|preventDefault={submitPost} action="?/submitPost">
        <textarea
          bind:value={content}
          placeholder="What's on your mind?"
          class="w-full h-48 border border-gray-300 p-2 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <div class="flex justify-end mt-4">
          <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Post
          </button>
        </div>
      </form>
    </div>
</div>

 -->
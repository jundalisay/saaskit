<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  let content = '';
  export let data;

  const submitPost = async () => {
    console.log("clicked!");
    // if (!content || !user) return;

    // const { error } = await supabase.from('posts').insert([{ content, user_id: user.id }]);
    // console.log("posted!");

    // if (error) {
    //   console.error(error);
    // } else {
    //   content = ''; // Clear input
    //   // window.location.href = '/';
    //   // await fetchPosts(); // Refresh posts
    // }
  };
</script>


<svelte:head>
  <title>Posts Dashboard</title>
</svelte:head>

<div class="container md:w-[800px] px-8 mx-auto">
<!--   <div class="text-center gap-3">
    <Card.Title>Posts</Card.Title>
  </div> -->

  {#each data.bunch as post}
  <Card.Root class="mb-4">
    <Card.Header>
      <Card.Description>
      <p>{post.content}</p>
      <small class="text-gray-500">{new Date(post.created_at).toLocaleString()}</small>
    
      </Card.Description>
    </Card.Header>
  </Card.Root>
  {/each}


<Card.Root>
  <Card.Header>
<!--     <div class="flex flex-nowrap items-center gap-3">
      <Card.Title>Posts</Card.Title>
    </div> -->
    <Card.Description>

      <form on:submit|preventDefault={submitPost}>
        <textarea
          type="text"
          placeholder="Say something.."
          bind:value={content}/>
        <button type="submit" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          Post
        </button>
      </form>

    <!-- <form method="POST" on:submit|preventDefault={submitPost} action="" class="mb-4"> -->
<!--     <form on:submit|preventDefault={submitPost} class="mb-4">      
      <input
        bind:value={content}
        placeholder="What's happening?"
        class="w-full border border-gray-300 p-2 rounded"
        rows="3">

    </form> -->
    </Card.Description>
  </Card.Header>
</Card.Root>

</div>




<!-- <script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import * as Form from '$lib/components/ui/form';
  import { Input } from '$lib/components/ui/input';
  // import {
  //   superForm,
  //   type Infer,
  //   type SuperValidated,
  // } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import LoaderCircle from '~icons/lucide/loader-circle';
  import { infoFormSchema, type InfoFormSchema } from './schema';

  export let data;
  export let posts = [];
  export let content = '';
  // let user;

</script>

<Card.Root>
  <form method="POST" action="?/createPost" use:enhance>
    <Card.Content>
      <input
        bind:value={content}
        placeholder="What's happening?"
        class="w-full border border-gray-300 p-2 rounded"
        rows="3">
    </Card.Content>
    <Card.Footer class="flex gap-2">
      <button type="submit" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Post
      </button>
    </Card.Footer>
  </form>
</Card.Root>
 -->
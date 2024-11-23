<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import PostForm from './post-form.svelte';

  export let data;
  // const getProfile = (event) => {
  // async function getProfile(locals) {
  //   console.log("asdf");
  //   const { profiles } = await locals.supabase.from('profiles').select('*');
  //   console.log("profiles:", profiles);
  // }

  // async function getProfile = (event) => {  
  //   // addToCart(event.detail);
  // };

</script>


<svelte:head>
  <title>Posts</title>
</svelte:head>

<div class="container md:w-[800px] px-8 mx-auto"> 

  {#if data.posts}

    {#each data.posts as post}
    <Card.Root class="mb-4">
      <Card.Header>
        <Card.Description>
        <!-- {post} -->

   <div class="flex items-start px-4 py-6">
      <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src="/logos/pp.png" alt="avatar">
      <div class="">
         <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold text-gray-900 -mt-1"></h2>
            <!-- {getProfile(post.user_id)} -->
         </div>
        <small class="text-gray-500">{new Date(post.created_at).toLocaleString()}</small>
         <p class="mt-3 text-gray-700 text-sm">
          {post.content}
         </p>
         <div class="mt-4 flex items-center">
<!--             <div class="flex mr-2 text-gray-700 text-sm mr-3">
               <svg fill="none" viewBox="0 0 24 24"  class="w-4 h-4 mr-1" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
               <span>12</span>
            </div>
            <div class="flex mr-2 text-gray-700 text-sm mr-8">
               <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-1" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
               </svg>
               <span>8</span>
            </div> -->
            <div class="flex mr-2 text-gray-700 text-sm mr-4">
               <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-1" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                </svg>
               <span class="pr-5">share</span>
               X
               <span class="px-2">Delete</span>
            </div>
         </div>
      </div>
   </div>


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


<!-- 
const me = async (_parent: any, _params: any, context: Context): Promise<MePayload> => {
  try {
    const { data: sessionUser, error: sessionError } = await supabase.auth.getUser(context.token.replace('Bearer ', ''));
    console.log({ sessionUser });
    console.log({ sessionError });

    if (!sessionUser.user || sessionError) {
      return {
        ...userError({ message: 'Must be logged in', path: 'me resolver' }),
      };
    }

    const userId = sessionUser.user?.id;
    const { data: user, error: error } = await supabase
      .from('users')
      .select('*, notifications(*)')
      .eq('id', userId)
      .single();

    console.log({ user });
    console.log({ error });

    if (!user || error) {
      return {
        ...userError({ message: 'Unable to fetch currentUser', path: 'me resolver' }),
      };
    }

    return {
      user,
      errors: null,
    };
  } catch (err) {
    return {
      ...userError({ message: 'Error running me resolver', path: 'me resolver' }),
      notifications: [],
      onboardingSteps: [],
    };
  }

};

export default me; -->
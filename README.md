### SaaS Kit 

- SvelteKit, Tailwind, shadcn-svelte, Postgres, and Supabase.
- Additional marketing pages, UI components, user dashboards, admin portals, database backends, API endpoints, and more.

> Based on [CriticalMoments/CMSaasStarter](https://github.com/CriticalMoments/CMSaasStarter) by the folks at [Critical Moments](https://criticalmoments.io)!

- User Authentication: Sign up, sign out, forgot password, email verification, oAuth and account deletion. Powered by Supabase Auth.
- Marketing Page with SEO optimization
- User Dashboard with user profile, user settings, update email/password, billing, and more.
- Subscriptions powered by Stripe Checkout
- Pricing page
- Contact-us form
- Billing portal: self serve to change card, upgrade, cancel, or download receipts
- Style toolkit: theming and UI components
- Responsive: designed for mobile and desktop.
- Extensible: all the tools you need to make additional marketing pages, UI components, admin portals, database backends, API endpoints, and more.


## Tech Stack

- Web Framework: SvelteKit
- CSS / Styling
  - Framework: TailwindCSS
  - Component library: shadcn-svelte
- Suggested Hosting Stack
  - Host + CDN: Cloudflare Pages
  - Serverless compute: Cloudflare Workers
  - Authentication: Supabase Auth
  - Database: Supabase Postgres
- Payments
  - Stripe Checkout
  - Stripe Portal


```sh
## First fork the project on Github
git clone <your-repo-from-this-template>
cd <your-repo-dir> ## or your fork name if different
npm install
## Create an env file. You'll replace the values in this in later steps.
cp .env.example .env.local
## Run the project locally in dev mode, and launch the browser
npm run dev -- --open
```

[CI scripts](https://aws.amazon.com/devops/continuous-integration/) designed for [GitHub Actions](https://github.com/features/actions). 

- [build](https://github.com/kizivat/saas-kit/blob/main/.github/workflows/build.yml)
- [code formatting](https://github.com/kizivat/saas-kit/blob/main/.github/workflows/format.yml) 
- [code linting and typechecking passes](https://github.com/kizivat/saas-kit/blob/main/.github/workflows/linting.yml).

manually run these scripts:
- `npm run build` for build
- `npm run format:check` to check formatting
- `npm run lint` for the linting
- `npm run check` for typechecking
- `npm run test` for testing

VSCode extensions:
- Svelte for Svelte and accessibility issues: [VSCode](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) or [other editors](https://sveltesociety.dev/tools#editor-support)
- ESLint for type checking and linting: [VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [other editors](https://eslint.org/docs/latest/use/integrations)
- Vitest for testing if you add tests: [VSCode](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) or [other editors](https://vitest.dev/guide/ide)

To catch build, formatting, linting and test issues before you commit changes, we suggest the following local git hook. It will run before you commit, stop you from breaking the build, and show any issues that are found. Add the lines below to an executable git hook script at the location `.git/hooks/pre-commit`.

```
#!/bin/sh
set -e
npm run format:check
npm run lint
npm run build
npm run check
npm run test
```

Finally: if you find build, formatting or linting rules too tedious, you can disable enforcement by deleting the CI files (`.github/workflows/*`) and remove the git hook (`.git/hooks/pre-commit`).


### Supabase Local

Run locally with [Supabase CLI](https://supabase.com/docs/guides/cli). Supabase CLI is installed locally after running `npm install` above.

Run [Docker Desktop](https://www.docker.com/products/docker-desktop) before running the commands below.

Start Supabase locally:

```sh
npx supabase start
```

> First run will download the Docker images

local Supabase Studio dashboard at [http://localhost:54323](http://localhost:54323).

At the end of the starting process, Supabase CLI will output values you'll need to set in your `.env.local` file for local development. You can also print this information at any time by running `npx supabase status`.

```sh
npx supabase status -o env --override-name api.url="PUBLIC_SUPABASE_URL" --override-name auth.anon_key="PUBLIC_SUPABASE_ANON_KEY" --override-name auth.service_role_key="PRIVATE_SUPABASE_SERVICE_ROLE"
```

[/supabase/config.toml](/supabase/config.toml) has the local Supabase config. Change these:

- [ ] `project_id`
- [ ] `auth.external.<providers_you_want_to_support>`

Migrate DB:

```sh
npx supabase db reset
```

#### Production

```sh
npx supabase login
```

Link your local Supabase project to your hosted Supabase project. This will allow you to deploy your local database schema to your hosted project.

```sh
npx supabase link
```

Or deploy your local database schema to your hosted project.

```sh
npx supabase db push
```

### Deploy To Cloudflare

[Cloudflare](https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-site/#deploy-with-cloudflare-pages) Select “SvelteKit” as framework

Add environment variables (PUBLIC_SUPABASE_URL,
PUBLIC_SUPABASE_ANON_KEY, PRIVATE_SUPABASE_SERVICE_ROLE, and PRIVATE_STRIPE_API_KEY).

Optional: enable [Cloudflare Analytics](https://www.cloudflare.com/en-ca/application-services/products/analytics/) for usage metrics.

If you prefer another host you can explore alternatives:

- [SvelteKit official adapters](https://kit.svelte.dev/docs/adapters) including Netlify, Vercel, and Node
- [Community adapters](https://sveltesociety.dev/components#adapters) including Github pages, AppEngine, Azure, and more
- [Supabase](https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit) if you want one host for everything. Note: they do charge $10 a month for custom domains, unlike Cloudflare.


- [ ] Set a name for your site in `src/config.ts:WebsiteName`
- [ ] Content
  - [ ] Add actual content for marketing homepage
  - [ ] Add any pages you want on top of our boiler plate (about, terms of service, etc). Be sure to add links to them in the header, mobile menu header, and footer as appropriate (`src/routes/(marketing)/+layout.svelte`).
- [ ] Update SEO content
  - [ ] Update title and meta description tags for every public page. We include generic ones using your site name (`src/config.ts:WebsiteName`), but the more specific these are the better.
- [ ] Style
  - [ ] Create or paste your shadcn-svelte theme matching your brand (see `src/app.css`)
  - [ ] Update the marketing page layout `src/routes/(marketing)/+layout.svelte`: customize design, delete unwanted pages from header and footer
  - [ ] Update the favicon in the `/static/` directory
- [ ] Functionality
  - [ ] Add actual SaaS functionality!
  - [ ] Replace the admin dashboard with real content (`/src/routes/(app)/dasboard/+page.svelte`).
  - [ ] Add API endpoints and database tables as needed to deliver your SaaS product.


<script lang="ts">
  import * as Pricing from '$lib/components/landing/pricing';
  import * as Card from '$lib/components/ui/card';
  import Stripe from 'stripe';
  import * as Price from '../../../../lib/components/price/index.js';

  type Price = Stripe.Price & {
    product: Stripe.Product;
  };
  export let prices: readonly [Price, Price, Price];
</script>

<Pricing.Root>
  <Pricing.Plan>
    <Card.Root class="relative">
      <div class="absolute right-5 top-1.5">
        <Price.Badges price={prices[0]} />
      </div>
      <Card.Header>
        <Card.Title>{prices[0].product.name}</Card.Title>
        <Card.Description>
          {prices[0].product.description ?? ''}
        </Card.Description>
      </Card.Header>
      <Price.Core price={prices[0]}>
        <Card.Content class="flex flex-col gap-6">
          <!-- <span class="text-5xl font-black tracking-tight">$0</span> -->
          <Price.Amount price={prices[0]} />
          <Price.Button price={prices[0]}>Get Started</Price.Button>
        </Card.Content>
      </Price.Core>
      <Card.Footer>
        <Pricing.PlanFeatures>
          <Pricing.FeatureItem>Everything</Pricing.FeatureItem>
          <Pricing.FeatureItem>
            Good kickstart for your product
          </Pricing.FeatureItem>
        </Pricing.PlanFeatures>
      </Card.Footer>
    </Card.Root>
  </Pricing.Plan>
  <Pricing.Plan emphasized>
    <Card.Root class="relative">
      <div class="absolute right-2 top-1.5">
        <Price.Badges price={prices[1]} />
      </div>
      <Card.Header>
        <Card.Title>{prices[1].product.name}</Card.Title>
        <Card.Description>
          {prices[1].product.description ?? ''}
        </Card.Description>
      </Card.Header>
      <Price.Core price={prices[1]}>
        <Card.Content class="flex flex-col gap-6">
          <!-- <span class="text-5xl font-black tracking-tight">$0</span> -->
          <Price.Amount price={prices[1]} />
          <Price.Button price={prices[1]}>Get Started</Price.Button>
        </Card.Content>
      </Price.Core>
      <Card.Footer>
        <Pricing.PlanFeatures>
          <Pricing.FeatureItem>Everything from free</Pricing.FeatureItem>
          <Pricing.FeatureItem>
            Warm fuzzy feeling for both of us
          </Pricing.FeatureItem>
        </Pricing.PlanFeatures>
      </Card.Footer>
    </Card.Root>
  </Pricing.Plan>
  <Pricing.Plan>
    <Card.Root class="relative">
      <div class="absolute right-2 top-1.5">
        <Price.Badges price={prices[2]} />
      </div>
      <Card.Header>
        <Card.Title>{prices[2].product.name}</Card.Title>
        <Card.Description>
          {prices[2].product.description ?? ''}
        </Card.Description>
      </Card.Header>
      <Price.Core price={prices[2]}>
        <Card.Content class="flex flex-col gap-6">
          <!-- <span class="text-5xl font-black tracking-tight">$0</span> -->
          <Price.Amount price={prices[2]} />
          <Price.Button price={prices[2]}>Get Started</Price.Button>
        </Card.Content>
      </Price.Core>
      <Card.Footer>
        <Pricing.PlanFeatures>
          <Pricing.FeatureItem>
            Everything from free and "Say thanks"
          </Pricing.FeatureItem>
          <Pricing.FeatureItem>Logo cloud spot</Pricing.FeatureItem>
          <Pricing.FeatureItem>Your logo in the README</Pricing.FeatureItem>
        </Pricing.PlanFeatures>
      </Card.Footer>
    </Card.Root>
  </Pricing.Plan>
</Pricing.Root>



API URL: http://127.0.0.1:54321
     GraphQL URL: http://127.0.0.1:54321/graphql/v1
          DB URL: postgresql://postgres:postgres@127.0.0.1:54322/postgres
      Studio URL: http://127.0.0.1:54323
    Inbucket URL: http://127.0.0.1:54324
      JWT secret: super-secret-jwt-token-with-at-least-32-characters-long
        anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0
service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU



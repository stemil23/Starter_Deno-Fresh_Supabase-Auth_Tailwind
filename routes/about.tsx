// deno-lint-ignore-file no-explicit-any
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import HeroAbout from "../components/HeroAbout.tsx";
import { State } from "./_middleware.ts";

export const handler: Handlers<any, State> = {
  GET(_req, ctx) {
    return ctx.render({...ctx.state});
  }
}

export default function Home(props: PageProps) {
  return (
    <Layout isLoggedIn={props.data.token} title="About">
      <div class="mt-10 px-5 mx-auto flex max-w-screen-md flex-col justify-center">
        <HeroAbout />
      </div>
      
    </Layout>
  );
}

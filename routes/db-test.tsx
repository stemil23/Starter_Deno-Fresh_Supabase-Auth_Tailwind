// deno-lint-ignore-file no-explicit-any
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import EdgeDBMovies from "../components/EdgeDBMovies.tsx";
import { State } from "./_middleware.ts";
import { getAllMovies } from "../utils/edgedb/queries/movies.ts";

export const handler: Handlers<any, State> = {
  async GET(_req, ctx) {
    const movies = await getAllMovies();
    return ctx.render({
      ...ctx.state,
      movies,
    });
  }
}

export default function Home(props: PageProps) {
  return (
    <Layout isLoggedIn={props.data.token}>
      <div class="mt-10 px-5 mx-auto flex max-w-screen-md flex-col justify-center">
        <EdgeDBMovies movies={props.data.movies} />
      </div>
    </Layout>
  );
}

import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import { State } from "./_middleware.ts";
import EdgeDBMovies from "../components/SsrEdgeDBMovies.tsx";
import { Movie } from "../components/SsrEdgeDBMovies.tsx";
import client from "../dbCloud.ts";
import e from "$generated/index.ts";

interface PageData extends State {
  movies: Movie[];
}

export const handler: Handlers<PageData, State> = {
  async GET(_req, ctx) {
    try {
      const query = e.select(e.Movie, {
        id: true,
        title: true,
        actors: {
          name: true
        }
      });

      const movies = await query.run(client);
      
      return ctx.render({
        ...ctx.state,
        movies: movies as Movie[],
      });
    } catch (error) {
      console.error('Database query failed:', error);
      return new Response('Database error', { status: 500 });
    }
  }
}

export default function Home(props: PageProps<PageData>) {
  return (
    <Layout isLoggedIn={Boolean(props.data.token)} title="DB Test SSR">
      <EdgeDBMovies data={props.data.movies} />
    </Layout>
  );
}

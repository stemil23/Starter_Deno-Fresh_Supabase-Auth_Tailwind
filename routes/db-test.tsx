import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import { State } from "./_middleware.ts";
import EdgeDBMovies from "../components/SsrEdgeDBMovies.tsx";
import { Movie } from "../components/SsrEdgeDBMovies.tsx";
import client, { e } from "../dbCloud.ts";

interface PageData extends State {
  movies: Movie[];
}

export const handler: Handlers<PageData, State> = {
  async GET(_req, ctx) {
    try {
      const query = e.select(e.Movie, () => ({
        id: true,
        title: true,
        actors: () => ({
          name: true
        }),
        limit: 10
      }));

      const movies = await query.run(client);
      
      return ctx.render({
        ...ctx.state,
        movies,
      });
    } catch (error) {
      console.error('Database query failed:', error);
      return ctx.render({
        ...ctx.state,
        movies: [],
      });
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

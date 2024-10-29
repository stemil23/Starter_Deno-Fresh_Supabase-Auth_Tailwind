// deno-lint-ignore-file no-explicit-any
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
// import HeroAbout from "../components/HeroAbout.tsx";
import { State } from "./_middleware.ts";
import EdgeDBCloudTest from "../islands/ApiEdgeDbMovies.tsx";
// import e { client } from "$generated/index.ts";
import client from "../dbCloud.ts";
import { e } from "../dbCloud.ts";
 
interface Movie {
  id: string;
  title: string | null;
  actors: { name: string }[];
}

interface PageData {
  movies: Movie[];
  token: string | null;
}

export const handler: Handlers<PageData, State> = {
  async GET(_req, ctx) {
    try {
      const query = e.select(e.Movie, () => ({
        id: true,
        title: true,
        actors: {
          name: true
        }
      }));

      const movies = await query.run(client);
      
      return ctx.render({
        movies,
        token: ctx.state.token || null
      });
    } catch (error) {
      console.error('Error fetching movies:', error);
      return ctx.render({
        movies: [],
        token: ctx.state.token || null
      });
    }
  }
}

export default function Home({ data }: PageProps<PageData>) {
  return (
    <Layout isLoggedIn={Boolean(data.token)} title="DB Test using API and Fresh Island with 2 sec delay">
      <EdgeDBCloudTest data={data.movies} />
    </Layout>
  );
}

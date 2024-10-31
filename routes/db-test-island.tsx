import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import { State } from "./_middleware.ts";
import EdgeDBCloudTest from "../islands/EdgeDbMovies.tsx";
import { getAllMovies } from "../utils/edgedb/queries/movies.ts";

interface Movie {
  id: string;
  title: string;
  year?: number;
  description?: string;
}

interface PageData {
  movies: Movie[];
  token: string | null;
}

export const handler: Handlers<PageData, State> = {
  async GET(_req, ctx) {
    try {
      const movies = await getAllMovies();
      
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
    <Layout isLoggedIn={Boolean(data.token)} title="DB Test Fresh Island">
      <div class="mt-10 px-5 mx-auto flex max-w-screen-md flex-col justify-center">
        <EdgeDBCloudTest data={data.movies} />
      </div>
    </Layout>
  );
}

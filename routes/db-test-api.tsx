import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import { State } from "./_middleware.ts";
import EdgeDBMovies from "../components/SsrEdgeDBMovies.tsx";
import { Movie } from "../components/SsrEdgeDBMovies.tsx";

interface PageData extends State {
  movies: Movie[];
}

export const handler: Handlers<PageData, State> = {
  async GET(req, ctx) {
    try {
      const currentUrl = new URL(req.url);
      const apiUrl = new URL("/api/movies", currentUrl.origin);
      
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      
      const movies = await response.json();
      
      return ctx.render({
        ...ctx.state,
        movies,
      });
    } catch (error) {
      console.error('API request failed:', error);
      return ctx.render({
        ...ctx.state,
        movies: [],
      });
    }
  }
}

export default function Home(props: PageProps<PageData>) {
  return (
    <Layout isLoggedIn={Boolean(props.data.token)} title="DB Test via API">
      <EdgeDBMovies data={props.data.movies} />
    </Layout>
  );
}

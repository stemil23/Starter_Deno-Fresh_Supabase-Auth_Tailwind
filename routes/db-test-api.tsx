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
      // Construct URL properly using request headers
      const protocol = req.headers.get("x-forwarded-proto") || "http";
      const host = req.headers.get("host") || "localhost:8000";
      const apiUrl = `${protocol}://${host}/api/movies`;
      
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

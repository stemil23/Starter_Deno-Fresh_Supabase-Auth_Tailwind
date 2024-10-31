import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import { State } from "./_middleware.ts";

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
      return new Response('API Error', { status: 500 });
    }
  }
}

export default function Home(props: PageProps<PageData>) {
  return (
    <Layout isLoggedIn={Boolean(props.data.token)} title="DB Test via API">
      <div class="p-4">
        <h2 class="text-2xl font-bold mb-4">Movies</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {props.data.movies.map((movie) => (
            <div key={movie.id} class="border rounded-lg p-4 shadow-sm">
              <h3 class="text-xl font-semibold mb-2">{movie.title}</h3>
 
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

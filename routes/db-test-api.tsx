// deno-lint-ignore-file no-explicit-any
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import { State } from "./_middleware.ts";
import EdgeDBCloudTest from "../islands/ApiEdgeDbMovies.tsx";

interface PageData {
  movies: any;
  token: string | null;
}

export const handler: Handlers<PageData, State> = {
  async GET(req, ctx) {
    try {
      // Get the current URL to build the API URL with the same host
      const url = new URL(req.url);
      const apiUrl = `${url.protocol}//${url.host}/api/movies?limit=10&offset=0`;
      
      console.log("Fetching from API URL:", apiUrl);
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const jsonResponse = await response.json();
      console.log("API Response:", jsonResponse);
      
      const { data: movies } = jsonResponse;
      
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
    <Layout isLoggedIn={Boolean(data.token)} title="DB Test using API and Fresh Island with 1/2 sec delay">
      <EdgeDBCloudTest data={data.movies} />
    </Layout>
  );
}

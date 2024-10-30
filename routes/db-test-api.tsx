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
      const url = new URL(req.url);
      const apiUrl = `${url.protocol}//${url.host}/api/movies`;
      
      console.log("Fetching from API URL:", apiUrl);
      
      const response = await fetch(apiUrl, {
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache'
        },
      });
      
      if (!response.ok) {
        console.error('API Response not OK:', {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries())
        });
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const text = await response.text();
      console.log("Raw API Response:", text);
      
      const jsonResponse = JSON.parse(text);
      console.log("Parsed API Response:", jsonResponse);
      
      const { data: movies } = jsonResponse;
      
      if (!movies) {
        console.error('No movies data in response:', jsonResponse);
        throw new Error('No movies data in response');
      }

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

import { Handlers } from "$fresh/server.ts";
import getClient from "../../dbCloud.ts";
import e from "$generated/index.ts";

interface MovieResponse {
  data: Array<{
    id: string;
    title: string;
    actors: Array<{
      name: string;
    }>;
  }>;
}

export const handler: Handlers = {
  async GET(_req, _ctx) {
    try {
      const client = await getClient();

      const moviesQuery = e.select(e.Movie, () => ({
        id: true,
        title: true,
        actors: {
          name: true,
        },
      }));

      const movies = await moviesQuery.run(client);
      console.log("Movies fetched successfully, count:", movies.length);

      return new Response(JSON.stringify({ data: movies }), {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store", // Disable caching temporarily for debugging
        },
      });
    } catch (error) {
      console.error("Error in movies API:", error);
      
      return new Response(
        JSON.stringify({
          error: "Failed to fetch movies",
          details: error instanceof Error ? error.message : "Unknown error",
        }),
        {
          status: 503,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  },
};

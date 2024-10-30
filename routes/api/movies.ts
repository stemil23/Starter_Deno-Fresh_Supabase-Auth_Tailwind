import { Handlers } from "$fresh/server.ts";
import client from "../../dbCloud.ts";
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
      const moviesQuery = e.select(e.Movie, () => ({
        id: true,
        title: true,
        actors: {
          name: true,
        },
      }));

      const movies = await moviesQuery.run(client);
      console.log("Movies fetched:", movies);

      const response: MovieResponse = {
        data: movies,
      };

      return new Response(JSON.stringify(response), {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=60",
        },
      });
    } catch (error) {
      console.error("Error fetching movies:", error);
      
      return new Response(
        JSON.stringify({
          error: "Failed to fetch movies",
          details: error instanceof Error ? error.message : "Unknown error occurred",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  },
};

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
      // Verify connection is alive
      await client.execute('SELECT 1');

      const moviesQuery = e.select(e.Movie, () => ({
        id: true,
        title: true,
        actors: {
          name: true,
        },
      }));

      const movies = await moviesQuery.run(client);
      console.log("Movies fetched successfully, count:", movies.length);

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
      console.error("Error in movies API:", error);
      
      const errorMessage = error instanceof Error 
        ? `${error.name}: ${error.message}`
        : "Unknown error occurred";
      
      return new Response(
        JSON.stringify({
          error: "Failed to fetch movies",
          details: errorMessage,
          timestamp: new Date().toISOString(),
        }),
        {
          status: 503, // Service Unavailable instead of 500
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  },
};

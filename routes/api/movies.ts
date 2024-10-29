// First, create a new API endpoint
import { Handlers } from "$fresh/server.ts";
import client from "../../dbCloud.ts";
import e from "../../db/edgeql-js/index.ts";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    try {
      const query = e.select(e.Movie, () => ({
        id: true,
        title: true,
        actors: {
          name: true
        }
      }));

      const movies = await query.run(client);

      return new Response(JSON.stringify(movies), {
        headers: {
          "Content-Type": "application/json",
        }
      });
    } catch (error) {
      console.error('Error fetching movies:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      
      return new Response(
        JSON.stringify({ 
          error: 'Failed to fetch movies',
          details: errorMessage 
        }), {
          status: 500,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
  },
};

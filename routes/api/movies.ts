// First, create a new API endpoint
import { Handlers } from "$fresh/server.ts";
import client from "../../dbCloud.ts";
import e from "$generated/index.ts";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    try {
      // Add timeout and connection management
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Database query timeout')), 5000);
      });

      const queryPromise = e.select(e.Movie, () => ({
        id: true,
        title: true,
        actors: {
          name: true
        }
      })).run(client);

      // Race between timeout and query
      const movies = await Promise.race([queryPromise, timeoutPromise]);

      return new Response(JSON.stringify(movies), {
        headers: {
          "Content-Type": "application/json",
        }
      });
    } catch (error) {
      console.error('Error fetching movies:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      
      // Adjust status code based on error type
      const status = error.message === 'Database query timeout' ? 504 : 500;

      return new Response(
        JSON.stringify({ 
          error: 'Failed to fetch movies',
          details: errorMessage 
        }), {
          status,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
  },
};

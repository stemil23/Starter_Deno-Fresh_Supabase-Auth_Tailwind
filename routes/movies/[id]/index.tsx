import { Handlers, PageProps } from "$fresh/server.ts";
import client, { e } from "../../../utils/edgedb/client.ts";

interface Movie {
  id: string;
  title: string;
}

interface PageData {
  movie?: Movie;
  error?: string;
}

export const handler: Handlers<PageData> = {
  async GET(_req, ctx) {
    const id = ctx.params.id;
    try {
      const movie = await e.select(e.Movie, (movie) => ({
        id: true,
        title: true,
        filter: e.op(movie.id, "=", e.uuid(id)),
      })).run(client);

      if (!movie) {
        return new Response("Movie not found", { status: 404 });
      }

      return await ctx.render({ movie: movie[0] });
    } catch (error) {
      return await ctx.render({ 
        error: error instanceof Error ? error.message : "Failed to load movie" 
      });
    }
  },
};

export default function MovieDetail({ data }: PageProps<PageData>) {
  if (data.error) {
    return (
      <div class="p-4 mx-auto max-w-screen-md">
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {data.error}
        </div>
      </div>
    );
  }

  const movie = data.movie;
  if (!movie) return null;

  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <div class="mb-4">
        <a
          href="/db-test"
          class="text-blue-500 hover:text-blue-700"
        >
          ← Back to Movies
        </a>
      </div>

      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="p-6">
          <div class="flex justify-between items-start">
            <h1 class="text-3xl font-bold mb-4">{movie.title}</h1>
            <a
              href={`/movies/${movie.id}/edit`}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Edit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 
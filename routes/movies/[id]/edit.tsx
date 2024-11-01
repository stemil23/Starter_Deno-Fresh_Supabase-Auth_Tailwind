import { Handlers, PageProps } from "$fresh/server.ts";
import client, { e } from "../../../utils/edgedb/client.ts";

interface Movie {
  id: string;
  title: string;
}

interface FormData {
  movie?: Movie;
  message?: string;
  success?: boolean;
}

export const handler: Handlers<FormData> = {
  async GET(_req, ctx) {
    const id = ctx.params.id;
    try {
      const movies = await e.select(e.Movie, (movie) => ({
        id: true,
        title: true,
        filter: e.op(movie.id, "=", e.uuid(id)),
      })).run(client);

      const movie = movies[0];
      if (!movie) {
        return new Response("Movie not found", { status: 404 });
      }

      return await ctx.render({ movie });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return await ctx.render({
        message: `Error: ${errorMessage}`,
        success: false,
      });
    }
  },

  async POST(req, ctx) {
    const id = ctx.params.id;
    try {
      const form = await req.formData();
      const title = form.get("title")?.toString();
      
      if (!title) {
        return await ctx.render({
          message: "Title is required",
          success: false,
        });
      }

      // Update movie in EdgeDB
      await e.update(e.Movie, (movie) => ({
        filter: e.op(movie.id, "=", e.uuid(id)),
        set: {
          title,
        },
      })).run(client);

      // Redirect to movies list page after successful update
      const headers = new Headers();
      headers.set("location", "/db-test");
      return new Response(null, {
        status: 303,
        headers,
      });

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return await ctx.render({
        message: `Error: ${errorMessage}`,
        success: false,
      });
    }
  },
};

export default function EditMovie({ data }: PageProps<FormData>) {
  const movie = data.movie;

  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <h1 class="text-2xl font-bold mb-4">Edit Movie</h1>
      
      {data?.message && (
        <div class={`p-4 mb-4 rounded ${data.success ? "bg-green-100" : "bg-red-100"}`}>
          {data.message}
        </div>
      )}

      {movie && (
        <form method="post" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">
              Title
              <input
                type="text"
                name="title"
                defaultValue={movie.title}
                required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </label>
          </div>

          <div class="flex gap-4">
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update Movie
            </button>
            <a
              href="/db-test"
              class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </a>
          </div>
        </form>
      )}
    </div>
  );
} 
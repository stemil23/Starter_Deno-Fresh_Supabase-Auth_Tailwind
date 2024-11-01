import { Handlers, PageProps } from "$fresh/server.ts";
import { getMovieBySlug, updateMovieBySlug } from "../../../utils/edgedb/queries/movies.ts";

interface Movie {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
}

interface FormData {
  movie?: Movie;
  message?: string;
  success?: boolean;
}

export const handler: Handlers<FormData> = {
  async GET(_req, ctx) {
    const slug = ctx.params.slug;
    try {
      const movie = await getMovieBySlug(slug);

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
    const currentSlug = ctx.params.slug;
    try {
      const form = await req.formData();
      const title = form.get("title")?.toString();
      const subtitle = form.get("subtitle")?.toString();
      
      if (!title || !subtitle) {
        return await ctx.render({
          message: "Title and subtitle are required",
          success: false,
        });
      }

      // Update movie in EdgeDB
      await updateMovieBySlug(currentSlug, { title, subtitle });

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

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Subtitle
              <input
                type="text"
                name="subtitle"
                defaultValue={movie.subtitle}
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
import { Handlers, PageProps } from "$fresh/server.ts";
import client, { e } from "../../utils/edgedb/client.ts";

interface FormData {
  message?: string;
  success?: boolean;
}

export const handler: Handlers<FormData> = {
  async GET(_req, ctx) {
    return await ctx.render({});
  },

  async POST(req, ctx) {
    try {
      const form = await req.formData();
      const title = form.get("title")?.toString();
    //   const year = parseInt(form.get("year")?.toString() || "0");
    //   const rating = parseFloat(form.get("rating")?.toString() || "0");
      
      if (!title) {
        return await ctx.render({
          message: "Please fill in all required fields",
          success: false,
        });
      }

      // Insert movie into EdgeDB
      await e.insert(e.Movie, {
        title: title,
      }).run(client);

      // Redirect to movies list page after successful insertion
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

export default function NewMovie({ data }: PageProps<FormData>) {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <h1 class="text-2xl font-bold mb-4">Add New Movie</h1>
      
      {data?.message && (
        <div class={`p-4 mb-4 rounded ${data.success ? "bg-green-100" : "bg-red-100"}`}>
          {data.message}
        </div>
      )}

      <form method="post" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">
            Title
            <input
              type="text"
              name="title"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </label>
        </div>

        {/* <div>
          <label class="block text-sm font-medium text-gray-700">
            Year
            <input
              type="number"
              name="year"
              min="1900"
              max={new Date().getFullYear()}
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </label>
        </div> */}

        {/* <div>
          <label class="block text-sm font-medium text-gray-700">
            Rating
            <input
              type="number"
              name="rating"
              min="0"
              max="10"
              step="0.1"
              required
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </label>
        </div> */}

        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
} 
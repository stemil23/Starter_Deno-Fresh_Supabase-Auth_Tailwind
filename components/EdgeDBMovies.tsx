import { Movie } from "../dbschema/interfaces.ts";

interface EdgeDBMoviesProps {
  movies: Movie[];
}

export default function EdgeDBMovies({ movies }: EdgeDBMoviesProps) {
  return (
    <div class="p-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Movies from EdgeDB</h1>
        <a
          href="/movies/new"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Movie
        </a>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            class="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-xl font-semibold mb-2">
                  <a
                    href={`/movies/${movie.slug}`}
                    class="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {movie.title}
                  </a>
                </h3>
                {movie.subtitle && (
                  <p class="text-gray-600">{movie.subtitle}</p>
                )}
              </div>
              <a
                href={`/movies/${movie.slug}/edit`}
                class="text-blue-500 hover:text-blue-700"
              >
                Edit
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

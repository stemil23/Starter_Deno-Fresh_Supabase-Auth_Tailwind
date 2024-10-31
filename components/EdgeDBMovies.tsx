interface Movie {
  id: string;
  title: string;
  year?: number;
  description?: string;
}

interface EdgeDBMoviesProps {
  movies: Movie[];
}

export default function EdgeDBMovies({ movies }: EdgeDBMoviesProps) {
  return (
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">EdgeDB Movies</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div
            key={movie.id}
            class="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 class="text-xl font-semibold mb-2">{movie.title}</h3>
            <p class="text-gray-600">Year: {movie.year}</p>
            {movie.description && (
              <p class="text-gray-700 mt-2">{movie.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

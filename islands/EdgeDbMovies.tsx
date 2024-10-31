import { useEffect, useState } from "preact/hooks";

interface Movie {
  id: string;
  title: string;
  year?: number;
  description?: string;
}

interface Props {
  data: Movie[];
}

export default function EdgeDBMovies({ data: movies }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div class="w-full">
        {[1, 2, 3].map((i) => (
          <div key={i} class="mb-4 p-4 border rounded animate-pulse">
            <div class="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div class="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div class="space-y-2">
              {[1, 2, 3].map((j) => (
                <div key={j} class="h-4 bg-gray-200 rounded w-1/2"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!movies?.length) {
    return <div class="p-4 text-center">No movies available</div>;
  }

  return (
    <div class="p-4">
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

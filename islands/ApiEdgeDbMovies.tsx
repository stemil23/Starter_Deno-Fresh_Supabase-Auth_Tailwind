import { useEffect, useState } from "preact/hooks";

interface Movie {
  id: string;
  title: string | null;
  actors: { name: string }[];
}

interface Props {
  data: Movie[];
}

export default function EdgeDBCloudTest({ data: movies }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 second delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div>Loading movies...</div>;
  }

  if (!movies?.length) {
    return <div>No movies available</div>;
  }

  return (
    <div class="w-full">
      {movies.map((movie) => (
        <div key={movie.id} class="mb-4 p-4 border rounded">
          <h2 class="text-2xl font-bold">{movie.title}</h2>
          <h3 class="text-xl mt-2">Actors:</h3>
          <ul class="list-disc list-inside">
            {movie.actors.map((actor) => (
              <li key={actor.name}>{actor.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

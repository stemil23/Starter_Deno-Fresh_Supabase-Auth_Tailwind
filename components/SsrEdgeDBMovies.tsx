import { PageProps } from "$fresh/server.ts";

export interface Actor {
  name: string;
}

export interface Movie {
  id: string;
  title: string | null;
  actors: Actor[];
}

const MovieCard = ({ movie }: { movie: Movie }) => (
  <article className="mb-4 p-4 border rounded">
    <h2 className="text-2xl font-bold">{movie.title || 'Untitled'}</h2>
    <h3 className="text-xl mt-2">Actors:</h3>
    <ul className="list-disc list-inside" aria-label="Movie cast">
      {movie.actors.length > 0 ? (
        movie.actors.map((actor) => (
          <li key={actor.name}>{actor.name}</li>
        ))
      ) : (
        <li>No actors found</li>
      )}
    </ul>
  </article>
);

interface EdgeDBMoviesProps {
  data: Movie[];
}

export default function EdgeDBMovies({ data: movies }: EdgeDBMoviesProps) {
  if (!movies?.length) {
    return <div role="alert">No movies available</div>;
  }

  return (
    <section aria-label="Movie list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
}

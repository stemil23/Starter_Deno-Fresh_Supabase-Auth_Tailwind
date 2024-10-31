import client from "../client.ts";
import e from "$generated/index.ts";

export async function getAllMovies() {
  const query = e.select(e.Movie, () => ({
    id: true,
    title: true,
  }));

  return await query.run(client);
}

export async function getMovieById(id: string) {
  const query = e.select(e.Movie, (movie) => ({
    id: true,
    title: true,
    year: true,
    description: true,
    filter: e.op(movie.id, "=", id),
  }));

  return await query.run(client);
} 
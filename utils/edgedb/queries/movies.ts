import client from "../client.ts";
import e from "$generated/index.ts";
// import { Movie } from "$interfaces/interfaces.ts";

export async function getAllMovies() {
  const query = e.select(e.Movie, () => ({
    id: true,
    title: true,
    subtitle: true,
    slug: true,
  }));

  return await query.run(client);
}

export async function getMovieBySlug(slug: string) {
  const query = e.select(e.Movie, (movie) => ({
    id: true,
    title: true,
    subtitle: true,
    slug: true,
    filter_single: { slug }
  })).assert_single();

  return await query.run(client);
}

export async function createMovie(title: string, subtitle: string) {
  return await e.insert(e.Movie, {
    title,
    subtitle,
  }).run(client);
}

export async function updateMovieBySlug(slug: string, data: { title: string; subtitle: string }) {
  return await e.update(e.Movie, () => ({
    filter_single: { slug },
    set: {
      title: data.title,
      subtitle: data.subtitle,
    },
  })).assert_single().run(client);
} 
// // deno-lint-ignore-file no-explicit-any
// import { Handlers, PageProps } from "$fresh/server.ts";
// import Layout from "../components/Layout.tsx";
// // import HeroAbout from "../components/HeroAbout.tsx";
// import { State } from "./_middleware.ts";
// import EdgeDBMovies from "../components/SsrEdgeDBMovies.tsx";
// import { Movie } from "../components/SsrEdgeDBMovies.tsx";
// import client from "../dbCloud.ts";
// import { e } from "../dbCloud.ts";
// // Add interface for the page data
// interface PageData extends State {
//   movies: Movie[];
// }

// export const handler: Handlers<PageData, State> = {
//   async GET(_req, ctx) {
//     try {
//       const result = e.select(e.Movie, (movie) => ({
//         id: true,
//         title: true,
//         actors: (actor) => ({
//           name: true,
//         }),
//       }));

//       const movies = await query.run(client);
      
//       return ctx.render({
//         ...ctx.state,
//         movies: movies as Movie[],  // Add type assertion here
//       });
//     } catch (error) {
//       console.error('Database query failed:', error);
//       return new Response('Database error', { status: 500 });
//     }
//   }
// }

// export default function Home(props: PageProps<PageData>) {
//   return (
//     <Layout isLoggedIn={Boolean(props.data.token)} title="DB Test SSR">
//       <EdgeDBMovies data={props.data.movies} />
//     </Layout>
//   );
// }

// deno-lint-ignore-file no-explicit-any
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
// import HeroAbout from "../components/HeroAbout.tsx";
import { State } from "./_middleware.ts";

export const handler: Handlers<any, State> = {
  GET(_req, ctx) {
    return ctx.render({...ctx.state});
  }
}

export default function Home(props: PageProps) {
  return (
    <Layout isLoggedIn={props.data.token} title="Instructions">
      <h2 className="text-2xl font-bold mb-4">Getting Started with Our Tech Stack</h2>
      <p className="mb-4">Welcome to our application! We use a modern tech stack including Deno, Fresh, Tailwind CSS, and Supabase Authentication. Here's a quick guide to get you started:</p>
      
      <h3 className="text-xl font-semibold mt-4 mb-2">1. Deno</h3>
      <p className="mb-2">Deno is a secure runtime for JavaScript and TypeScript. Make sure you have Deno installed on your system to run this project.</p>
      
      <h3 className="text-xl font-semibold mt-4 mb-2">2. Fresh Framework</h3>
      <p className="mb-2">Fresh is a next-gen web framework for Deno. Familiarize yourself with its file-based routing and island architecture for efficient development.</p>
      
      <h3 className="text-xl font-semibold mt-4 mb-2">3. Tailwind CSS</h3>
      <p className="mb-2">We use Tailwind for styling. You can find utility classes in our components for quick and responsive designs.</p>
      
      <h3 className="text-xl font-semibold mt-4 mb-2">4. Supabase Authentication</h3>
      <p className="mb-2">Supabase handles our authentication. Sign up or log in to access protected routes and features.</p>
      
      <p className="mt-4">If you need any help with these technologies, check out their official documentation or reach out to our development team.</p>
    </Layout>
  );
}

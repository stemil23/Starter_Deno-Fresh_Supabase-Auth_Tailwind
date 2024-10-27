import { Head } from "$fresh/runtime.ts";
import type { ComponentChildren } from "preact";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
interface LayoutProps {
  isLoggedIn: boolean;
  children: ComponentChildren;
  title?: string;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>Fresh Auth</title>
      </Head>
      <Nav loggedIn={props.isLoggedIn} />
      <div class="p-4 mx-auto max-w-screen-md">
        {props.title && <h1 class="text-2xl font-bold mb-5 text-center">{props.title}</h1>}
        {props.children}
      </div>
      <Footer />
    </>
  );
}

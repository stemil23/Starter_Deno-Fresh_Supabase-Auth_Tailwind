import Layout from "../../components/Layout.tsx";
import HeroAuthWelcome from "../../components/HeroAuthWelcome.tsx";

export default function Secret() {
  return (
    <Layout isLoggedIn={true} title="Welcome">

        <HeroAuthWelcome />

    </Layout>
  );
}
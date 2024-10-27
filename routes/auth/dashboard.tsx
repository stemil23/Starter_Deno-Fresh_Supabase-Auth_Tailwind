import Layout from "../../components/Layout.tsx";
import Dashboard from "../../components/Dashboard.tsx";

export default function Secret() {
  return (
    <Layout isLoggedIn={true} title="A Mock Dashboard">
      <div class="mt-10 px-5 mx-auto flex max-w-screen-md flex-col justify-center">
        <Dashboard />
      </div>
    </Layout>
  );
}
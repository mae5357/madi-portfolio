import Head from "next/head";
import About from "../components/About";
import { Layout } from "../layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-base-light">
        <Head>
          <title>Madison Ebersole</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="max-w-4xl mx-auto mt-16 antialiased">
          <About />
        </main>
      </div>
    </Layout>
  );
};

export default Home;

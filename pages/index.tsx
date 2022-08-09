import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import { Layout } from "../layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Madison Ebersole</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="max-w-4xl mx-auto antialiased">
          <About />
          <Experience />
        </main>
      </div>
    </Layout>
  );
};

export default Home;

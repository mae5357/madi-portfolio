import Head from "next/head";
import Tsne from "../components/tsne";
import { Layout } from "../layouts/Layout";

const tsneBlog = () => {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Madison Ebersole</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="max-w-4xl mx-auto antialiased">
          <Tsne />
        </main>
      </div>
    </Layout>
  );
};

export default tsneBlog;

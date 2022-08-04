import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-tan">
      <Head>
        <title>Madison Ebersole</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center ">
        Hi, I'm Madi.
        <About />
      </main>

    </div>
  )
}

export default Home

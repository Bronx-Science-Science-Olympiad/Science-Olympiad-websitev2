import { NextPage } from 'next';
import Head from 'next/head'
import Hero from "../components/hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bronx Science Science Olympiad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  );
}

export default Home;

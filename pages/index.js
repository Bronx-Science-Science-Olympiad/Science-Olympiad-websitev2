import Head from 'next/head'
import Hero from "../components/Hero";
import Layout from "../components/Layout";

export default function Home() {
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

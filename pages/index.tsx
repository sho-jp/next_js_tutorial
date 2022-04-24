import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { PrimaryButton } from "../components/PrimaryButton";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next.js Tutorial</title>
        <meta name="description" content="Next.js Tutoria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <PrimaryButton content="テストだよ" />
        <PrimaryButton content="テストだよ" />
        <PrimaryButton content="テストだよ" />
        <PrimaryButton content="テストだよ" />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;

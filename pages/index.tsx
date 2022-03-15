import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/header";
import { Secao1 } from "../components/secao1";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Secao1 />
    </div>
  );
};

export default Home;

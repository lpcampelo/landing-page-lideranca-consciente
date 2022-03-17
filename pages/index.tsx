import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/header";
import { Secao1 } from "../components/secao1";
import { Secao2 } from "../components/secao2";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Secao1 />
      <Secao2 />
    </>
  );
};

export default Home;

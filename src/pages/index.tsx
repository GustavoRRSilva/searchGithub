import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Search from "@/components/search/Search";
import { UserProps } from "@/types/user";
const inter = Inter({ subsets: ["latin"] });

import { useState } from "react";

export default function Home() {
  //User pode ser nullo ou ter o tipo de user props, iniciando em Nulo
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>Github Finder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>GitHub Search</h1>
        <Search loadUser={loadUser} />
      </main>
    </>
  );
}

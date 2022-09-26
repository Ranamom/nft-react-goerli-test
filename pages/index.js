import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { CenterProvider } from "nft-react";
import { Asset } from "nft-react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CenterProvider
          network="ethereum-goerli"
          mode="production"
          apiKey="YOUR_API_KEY"
        >
          <div style={{ width: 300 }}>
            <Asset
              address="0xd6b15d96ff071895cb42d34e786257fd0743e462"
              tokenId="2"
            />
          </div>
        </CenterProvider>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

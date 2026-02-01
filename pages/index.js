import Head from "next/head";
import styles from "../pages/style.css";

export default function Home({ serverTime }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Galactic Services</title>
      </Head>

      <main className={styles.main}>
        <h1>🚀 Welcome to Galactic Services</h1>
        <p>Your one-stop cosmic solution for interstellar needs.</p>

        <p>Server Time: <b>{serverTime}</b></p>

        <a href="/services" className={styles.button}>
          Explore Our Services
        </a>
      </main>
    </div>
  );
}

// SSR
export async function getServerSideProps() {
  return {
    props: {
      serverTime: new Date().toLocaleString(),
    },
  };
}

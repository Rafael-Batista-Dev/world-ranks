import Head from "next/head";
import Link from "next/link";
import styles from './Layout.module.css';

function components({children}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>World Ranks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>
            About
          </a>
        </Link>
        <Link href="/">
          <a>
            Contact
          </a>
        </Link>
      </nav>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

export default components;

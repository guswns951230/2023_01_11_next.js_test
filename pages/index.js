import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Main Page</h1>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={150}
          height={27}
          priority
        />
        <Link className={styles.Link} href="/about">
          About으로 이동
        </Link>
      </main>
    </>
  );
}

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>

        <p>
          My Pokemon
        Ivysaur&nbsp;
          <code className={styles.code}></code>
        </p>
        <div>
          
        <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
        </div>
      </div>

      <div className={styles.center}>
      <Image className={styles.logo}
          src="/image 6.svg"
          alt="imagen"
          width={400}
          height={400}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            About
          </h2>
          <p>
            type 
          </p>
          <p>
            height
          </p>
          <p>
            weight
          </p>
          <p>
            abilities
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Stats
          </h2>
          <p>HP&nbsp;</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Attack
          </p>
          <p>
            Defense
          </p>
          <p>
            Speed
          </p>
        </a>
      </div>
    </main>
  );
}
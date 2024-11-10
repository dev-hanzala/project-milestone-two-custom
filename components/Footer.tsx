import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="https://www.linkedin.com/in/dev-hanzala/" passHref>
            <a className={styles.link}>LinkedIn</a>
          </Link>
          <Link href="mailto:hanzala-waseem@proton.me" passHref>
            <a className={styles.link}>Email</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

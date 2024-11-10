import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link
            href="https://www.linkedin.com/in/dev-hanzala/"
            className={styles.link}
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:hanzala-waseem@proton.me"
            className={styles.link}
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}


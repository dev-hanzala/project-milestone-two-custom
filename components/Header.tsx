import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.profileContainer}>
        <Image
          src="/images/profile-picture.png"
          alt="Profile Picture"
          width={40}
          height={40}
          className={styles.profileImage}
        />
        <span className={styles.profileName}>Hanzala Waseem</span>
      </div>
      <nav className={styles.nav}>
        <Link href="/" passHref>
          <a className={styles.navLink}>Home</a>
        </Link>
        <Link href="/about" passHref>
          <a className={styles.navLink}>About</a>
        </Link>
        <Link href="/contact" passHref>
          <a className={styles.navLink}>Contact</a>
        </Link>
      </nav>
    </header>
  );
}

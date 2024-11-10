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
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
        <Link href="/contact" className={styles.navLink}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

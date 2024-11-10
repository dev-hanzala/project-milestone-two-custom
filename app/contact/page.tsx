import Hero from "@/components/Hero";
import Link from "next/link";
import styles from "./page.module.css";

const Contact = () => {
  return (
    <>
      <Hero heading="Reach Out" bg="/images/contact.jpg">
        Want to get in touch? Feel free to reach out to me via email or connect
        with me on LinkedIn. I&apos;m always open to discuss new projects,
        creative ideas, or opportunities to be part of your vision.
      </Hero>
      <section className={styles.section}>
        <h2 className={styles.heading}>Get in Touch</h2>
        <div className={styles.contactGrid}>
          <Link href="https://www.linkedin.com/in/dev-hanzala/" passHref>
            <div className={styles.contactCard}>
              <h3 className={styles.contactTitle}>LinkedIn</h3>
              <p className={styles.contactDescription}>
                Feel free to connect with me on LinkedIn. I am always open to
                discussing new projects, ideas, and opportunities.
              </p>
            </div>
          </Link>
          <Link href="mailto:hanzala-waseem@proton.me" passHref>
            <div className={styles.contactCard}>
              <h3 className={styles.contactTitle}>Email</h3>
              <p className={styles.contactDescription}>
                If you have any questions, or would like to get in touch, feel
                free to email me. I will get back to you as soon as possible.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Contact;

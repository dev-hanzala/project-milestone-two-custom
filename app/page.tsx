import Image from "next/image";
import Hero from "@/components/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero heading="Hanzala Waseem" bg="/images/bg.jpg">
        Web Developer & Student
      </Hero>
      <section className={styles.section}>
        <div className={`${styles.aboutMe} ${styles.orderLast}`}>
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.description}>
            I am a web developer specializing in Next.js. I build performant and
            responsive apps using technologies like Tailwind CSS.
          </p>
        </div>
        <div className={styles.profileImage}>
          <Image
            src="/images/profile-picture.png"
            alt="Profile Picture"
            fill
            className={styles.image}
          />
        </div>
      </section>
      <section className={styles.projectsSection}>
        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>Next.js</h3>
          <p className={styles.projectDescription}>
            Next.js is a full-stack React framework that can be used for server
            side rendering, static site generation, and more. I have extensive
            experience with Next.js and use it for most of my projects.
          </p>
          <Image
            src="/svgs/nextjs.svg"
            alt="Next.js Logo"
            width={240}
            height={240}
            className={`${styles.projectImage} ${styles.invert}`}
          />
        </div>
        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>Tailwind CSS</h3>
          <p className={styles.projectDescription}>
            Tailwind CSS is a utility-first CSS framework that allows you to
            quickly create consistent and responsive designs. I have extensive
            experience with Tailwind CSS and use it for most of my projects.
            <Image
              src="/svgs/tailwindcss.svg"
              alt="Next.js Logo"
              width={240}
              height={240}
              className={styles.projectImage}
            />
          </p>
        </div>
        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>TypeScript</h3>
          <p className={styles.projectDescription}>
            TypeScript is a statically typed version of JavaScript that allows
            you to create robust and maintainable code. I have extensive
            experience with TypeScript and use it for most of my projects.
            <Image
              src="/svgs/typescript.svg"
              alt="Next.js Logo"
              width={240}
              height={240}
              className={styles.projectImage}
            />
          </p>
        </div>
      </section>
    </>
  );
}

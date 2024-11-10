import Hero from "@/components/Hero";
import styles from "./page.module.css";

const About = () => {
  return (
    <div>
      <Hero heading="About Me" bg="/images/about.jpg">
        I am a web developer specializing in Next.js. I build performant and
        responsive apps using technologies like Tailwind CSS. I am currently
        graduating high school and attending the GIAIC program.
      </Hero>
      <section className={styles.section}>
        <h2 className={styles.heading}>Skills</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>Next.js</h3>
            <p className={styles.skillDescription}>
              Next.js is a full-stack React framework that can be used for
              server side rendering, static site generation, and more. I have
              extensive experience with Next.js and use it for most of my
              projects.
            </p>
          </div>
          <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>Tailwind CSS</h3>
            <p className={styles.skillDescription}>
              Tailwind CSS is a utility-first CSS framework that allows you to
              quickly create consistent and responsive designs. I have extensive
              experience with Tailwind CSS and use it for most of my projects.
            </p>
          </div>
          <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>JavaScript</h3>
            <p className={styles.skillDescription}>
              JavaScript is a high-level, dynamic, and interpreted programming
              language that is used for client-side scripting on the web. I have
              extensive experience with JavaScript and use it for most of my
              projects.
            </p>
          </div>
          <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>TypeScript</h3>
            <p className={styles.skillDescription}>
              TypeScript is a superset of JavaScript that adds optional static
              typing and other features. I have extensive experience with
              TypeScript and use it for most of my projects.
            </p>
          </div>
          <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>React</h3>
            <p className={styles.skillDescription}>
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on components. I have extensive
              experience with React and use it for most of my projects.
            </p>
          </div>
          <div className={styles.skillCard}>
            <h3 className={styles.skillTitle}>Node.js</h3>
            <p className={styles.skillDescription}>
              Node.js is a cross-platform, open-source JavaScript runtime
              environment that allows you to build server-side applications. I
              have experience with Node.js and use it for some of my projects.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

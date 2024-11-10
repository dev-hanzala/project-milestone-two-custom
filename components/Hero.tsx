import React from "react";
import styles from "./Hero.module.css";

interface HeroProps {
  heading: string;
  bg: string;
  children: React.ReactNode;
}

const Hero = ({ heading, bg, children }: HeroProps) => {
  return (
    <div className={styles.heroContainer}>
      <div
        className={styles.heroBackground}
        style={{ backgroundImage: `url(${bg})`, filter: "brightness(50%)" }}
      ></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>{heading}</h1>
        <p className={styles.heroSubheading}>{children}</p>
      </div>
    </div>
  );
};

export default Hero;

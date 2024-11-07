import React from 'react';
import styles from './page.module.css';

export const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <img
          src="https://i.pinimg.com/originals/92/ec/0d/92ec0dc96605cdc16383e74a0322b786.jpg"
          alt="Profile Picture"
          className={styles.profileImage}
        />
        <div className={styles.aboutContent}>
          <h2>John Doe</h2>
          <p>
            I am a software engineer with a passion for building innovative
            solutions. I have experience in a variety of programming languages
            and technologies, and I'm always eager to learn new skills.
          </p>
        </div>
      </div>
    </section>
  );
};
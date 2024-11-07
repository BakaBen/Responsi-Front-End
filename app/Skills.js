import React from 'react';
import styles from './page.module.css';

export const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.skillsContainer}>
        <h2>My Skills</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <img src="/api/placeholder/100/100" alt="HTML" />
            <h3>HTML</h3>
          </div>
          <div className={styles.skillCard}>
            <img src="/api/placeholder/100/100" alt="CSS" />
            <h3>CSS</h3>
          </div>
          <div className={styles.skillCard}>
            <img src="/api/placeholder/100/100" alt="JavaScript" />
            <h3>JavaScript</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
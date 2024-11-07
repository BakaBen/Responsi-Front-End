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
          <h2>Rubben Christiano</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quisquam non asperiores, corrupti iste minus exercitationem ex ea. Praesentium ex voluptatum corporis eligendi architecto magnam officiis a excepturi, impedit facere.
          </p>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import styles from './Chapter.module.css';

const Chapter = (bookName, chapter) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>{bookName}</h1>
        <h2>{chapter}</h2>
      </div>
      <div className={styles.right}>
        emotion/feeling tied with chapter personal notes commentary
      </div>
    </div>
  );
};

export default Chapter;

import React from "react";
import styles from '../css/ViewNote.module.css';

function ViewNote({ note }) {
  return (
    <div className={styles.bgmodal}>
      <div className={styles.content}>
        <div className={styles.close}>+</div>
        <h1>{note.title}</h1>
        <p>{note.description}</p>
      </div>
    </div>
  );
}

export default ViewNote;

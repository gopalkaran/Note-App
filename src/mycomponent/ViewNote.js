import React from "react";
import styles from "../css/ViewNote.module.css";

function ViewNote({ note }) {
  return (
    <div className={styles.popup}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.closebutton}>&times;</div>
        <h1 className={styles.heading}>{note.title}</h1>
        <small className={styles.des}>{note.description}</small>
      </div>
    </div>
  );
}

export default ViewNote;

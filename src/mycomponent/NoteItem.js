import React from "react";
import styles from "../css/NoteItem.module.css";
import logo from "../resource/note-big.svg";

function NoteItem({ item , del, i, edit , id, view, unhide}) {
  return (
    <div className={styles.itemContainer}>
      <img src={logo} alt="note_icon" className={styles.imgSize} />
      <div className={styles.container}>
        <h3>{item.title}</h3>
        <small>{item.description}</small>
        <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={()=>edit(id)}>Edit</button>
        <button className={styles.btn} onClick={()=>del(i)}>Delete</button>
        <button className={styles.btn} onClick={()=>{view(item); unhide();}}>View</button>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;

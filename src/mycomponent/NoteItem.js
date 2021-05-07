import React from "react";
import styles from "../css/NoteItem.module.css";
import logo2 from "../resource/delete_black_24dp.svg";
import logo1 from "../resource/edit_black_24dp.svg";
import logo3 from "../resource/visibility_black_24dp.svg";

function NoteItem({ item, del, i, edit, id, view, unhide, visible }) {
  const vis = visible ? styles.container : styles.hide;
  return (
    <div className={`${vis}`}>
          <img className={styles.edit} src={logo1} alt="edit" onClick={() => edit(id)}/>
          <img className={styles.delete} src={logo2} alt="delete" onClick={() => del(i)}/>
          <img className={styles.view} src={logo3} alt="view" onClick={() => {
            view(item);
            unhide();
          }}/>
      <h2>{item.title}</h2>
      <div>{item.description}</div>
    </div>
  );
}

export default NoteItem;

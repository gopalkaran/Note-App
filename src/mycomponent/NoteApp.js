import React, { useState } from "react";
import NoteList from "./NoteList";

function NoteApp() {
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [notes, setNotes] = useState([]);

  const onchangeHandler = (name) => {
    return ({ target: { value } }) => {
      setData({ ...data, [name]: value });
    };
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (data.title === "" || data.description === "") {
      return;
    }
    add(data);
    setData({ title: "", description: "" });
  };

  const add = (data) => {
    setNotes([data, ...notes]);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="TITLE"
          value={data.title}
          onChange={onchangeHandler("title")}
        />
        <textarea
          placeholder="DESCRIPTION"
          value={data.description}
          onChange={onchangeHandler("description")}
        ></textarea>
        <button>Add Note</button>
      </form>
      <NoteList list={notes}/>
    </div>
  );
}

export default NoteApp;

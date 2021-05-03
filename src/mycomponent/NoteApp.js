import React, { useState } from "react";
import NoteList from "./NoteList";
import ViewNote from "./ViewNote";

function NoteApp() {
  const [id, setId] = useState(1);
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState(0);
  const [show, setShow] = useState({});
  const [visibility, setVisibility] = useState(false);

  const onchangeHandler = (name) => {
    return ({ target: { value } }) => {
      setData({ ...data, [name]: value });
    };
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (data.title === "" || data.description === "") {
      alert("You must fill title and description");
      return;
    }
    if (notes.find(isExists) && !editId) {
      alert("Title already exists");
      return;
    }
    if (editId) {
      setNotes(
        notes.map((note, index) => {
          return note.id === editId
            ? { ...note, data: { ...data, description: data.description } }
            : note;
        })
      );
      setData({ title: "", description: "" });
      setEditId(0);
      return;
    }

    add({ id: id, data: data });
    setData({ title: "", description: "" });
    setId((id) => id + 1);
  };

  const isExists = (note) => {
    return note.data.title === data.title;
  };

  const add = (note) => {
    setNotes([note, ...notes]);
  };

  const del = (index) => {
    setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
    setData({ title: "", description: "" });
  };

  const edit = (id) => {
    const { data } = notes.find((note) => {
      return note.id === id ? note : null;
    });
    setData({ title: data.title, description: data.description });
    setEditId(id);
  };

  const view = (item) => {
    setShow(item);
  };

  const hide = () => {
    setVisibility(false);
  };

  const unhide = () => {
    setVisibility(true);
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
      <NoteList list={notes} del={del} edit={edit} view={view} unhide={unhide}/>
      <ViewNote note={show} visibility={visibility} hide={hide}/>
    </div>
  );
}

export default NoteApp;

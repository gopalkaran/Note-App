import React, { useState } from "react";
import NoteList from "./NoteList";

function NoteApp() {
  const [id, setId] = useState(0);
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
      alert("You must fill title and description")
      return
    }
    if(notes.find(isExists)){
      alert("Title already exists")
      return
    }

    add({id:id, data:data});
    setData({ title: "", description: "" });
    setId(id => id + 1)
  }

  const isExists = (note) =>{
    return note.data.title === data.title;
  }

  const add = (note) => {
    setNotes([note, ...notes]);
  }

  const del = (index) =>{
    setNotes([...notes.slice(0,index), ...notes.slice(index+1)]);
    setData({title:"",description:""});
  }

  const edit = (index) =>{
    setData({title:notes[index].data.title,description:notes[index].data.description})
  }

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
      <NoteList list={notes} del={del} edit={edit}/>
    </div>
  );
}

export default NoteApp;

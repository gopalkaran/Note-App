import React from "react";

function ViewNote({note}) {
  return (
    <div>
      <h2>{note.title}</h2>
      <small>{note.description}</small>
    </div>
  );
}

export default ViewNote;

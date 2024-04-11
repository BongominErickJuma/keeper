import React from "react";

function Note({ title, content, id, onDelete }) {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default Note;

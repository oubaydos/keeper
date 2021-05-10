import React from "react";
function Note(props) {
  function onClick() {
    props.onClick(props.id);
  }
  return (
    <div className="note" id={props.id}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={onClick}>DELETE</button>
    </div>
  );
}

export default Note;

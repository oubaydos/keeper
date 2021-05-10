import React, { useState } from "react";
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleText(e) {
    setContent(e.target.value);
  }
  function handleClick(e) {
    props.onClick(title, content);
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handleTitle}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={handleText}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

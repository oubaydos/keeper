import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function AddNote(title, content) {
    let obj = {
      title: title,
      content: content,
    };
    setNotes((prevNotes) => [...prevNotes, obj]);
    console.log(notes);
  }
  function HandleDelete(index) {
    setNotes((prevNotes) => prevNotes.filter((item, i) => i !== index));
  }
  return (
    <div>
      <Header />
      <CreateArea onClick={AddNote} />
      {notes.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          onClick={HandleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

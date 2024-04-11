import Header from "./components/Header.jsx";
import Note from "./components/Note.jsx";
import Footer from "./components/Footer.jsx";
import CreateArea from "./components/CreateArea.jsx";
import { useState } from "react";

function App() {
  
  const [notes, setNotes] = useState([]);
  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prev) => {
      return prev.filter((item, idx) => idx !== id);
    });
  };
  return (
    <>
      <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}

        <Footer />
      </div>
    </>
  );
}

export default App;

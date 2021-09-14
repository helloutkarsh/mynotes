import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";
var stylingObject = {
  div: {
    margin: "auto",
    display: "flex",
    flexWrap:'wrap',
    maxWidth: "40rem",
    height: "10rem",
  },
  addNoteDiv: {
    display: "block",
  },
};
export const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <>
    <div>

      <AddNote handleAddNote={handleAddNote}/>
    </div>

      <div style={stylingObject.div} className="NotesList">
        {notes.map((notes) => (
          
          <Note id={notes.id} text={notes.text} date={notes.date} 
          handleDeleteNote={handleDeleteNote}/>
        ))}
      </div>
    </>
  );
};
export default NotesList;
import React from 'react'
import NotesList from './components/NotesList';
import { useState } from 'react';
import {nanoid} from 'nanoid';
import AddNote from './components/AddNote';
import Header from './components/Header';
import Search from './components/Search';
var stylingObject = {
  div: {
    margin:'2rem',
    display:'flex',
    flexWrap:'wrap',
    maxWidth:'80rem'
  }, 
  input: {
    margin: "2px",
    padding: "5px"
  }
} 


// const addNote = (text) =>{
//   const date = new Date();
//   const newNote = {
//     id : nanoid(),
//     text: text,
//     date:date.toLocaleDateString()
//   }
//    const newNotes = [...notes,newNote]; //appends newNote to the existing nodes list
//   setNotes(newNotes);
// };

export const App = () => {
  const [notes,setNotes]=useState([{
    id:nanoid(),
    text:'',
    date:''
  }]);

  const [searchText,setSearchText]=useState('');

  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id : nanoid(),
      text: text,
      date:date.toLocaleDateString()
    }
     const newNotes = [...notes,newNote]; //appends newNote to the existing nodes list
    setNotes(newNotes);
  };

  const [darkMode,setDarkMode]=useState(false);

  
  const deleteNote = (id) => {
    const newNotes = notes.filter((notes)=> notes.id!==id);
    setNotes(newNotes)
  }
  
  return (
    <>
    <div className={`${darkMode && 'toggle-dark'}`} >
    
    <Header handleToggleDarkMode={setDarkMode}/>
    <Search handleSearchNote={setSearchText}/>
    <div style={stylingObject.div}className="container" >
      <NotesList notes={notes.filter((notes)=>notes.text.toLowerCase().includes(searchText))} 
      handleDeleteNote={deleteNote}
      handleAddNote={addNote}/>
    </div>
  </div>
  </>
  )
}
export default App;
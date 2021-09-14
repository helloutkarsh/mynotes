import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
var addNoteStyle = {
    noteFooter: {
        display:'block',
        width:'100'
    },
    holdButton: {
        float :'right'
    },
    note:{
        color:"black",
        background:"#FFF7AE",
        borderRadius:"5px",
        width: "100",
        minHeight :"9.25rem",
       minWidth:'100px',
        margin:"0.4rem"
    },
    textArea:{
        color:"black",
        background:"#FFF7AE",
        borderRadius:"5px"     
    }
}

var noteStyling = {
    div:{  
        color:"black",
        background:"#FFF7AE",
        borderRadius:"5px",
        width: "25rem",
        padding:'2px',
        minHeight :"2rem",
        margin:"0.5rem"
    },
        small:{
            borderRadius:"2.5px",
            margin:"0.125px",
            display:"block",
            margin:"0.5rem",
            minHeight:"6rem",
            color:'#343A40'
        },
        icon:{
            cursor:'crosshair',
            fontSize:'20px',
            color:'darkred',
            textAlign:'right',
            float:"right",
        },
        date:{
            backgroundColor:'lightblue',
            borderRadius:'2px',
            padding:'4px',
            margin:"10px 10px",
            fontSize:"12px",
            display:"inline-block",
            color:"black",
            width:'4.5rem',
            textAlign:'center'
        },
        writeArea : {
            borderRadius:"4px",
            padding:'5px',
            outline:'none',
            resize:'none',
            border:'none',
            width:'100%',
            background:'#c8ffb0'
        },
        button:{    
         
        margin:'10px',
        float:'right',
        width:'70px',
        fontSize:'12px',
        color:'white',
        borderRadius:'2px',
        border:'none'        },

    hold:{
        outline:'none',
        borderRadius:'2px',
        border: 'none', 
        color:'white',
        backgroundColor:'green',
        fontSize:'16px'
        }
    }
export const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 250;
    
    const handleChange = (event) =>{
        if(characterLimit-event.target.value.length>=0)// checks if characters can still be added to the note or not || the remaining character limit
        setNoteText(event.target.value)
    }
    const handleHoldNote = () =>{
        if(noteText.trim().length>0)
        handleAddNote(noteText);
        setNoteText('')
    }
   

    return (<>
        <div style ={noteStyling.div} className="note">
        <span style={noteStyling.small}><textarea placeholder="I'll remember it for you..." 
        style={noteStyling.writeArea} name="note" id="1" cols="16" rows="4"
        onChange={handleChange}
        value={noteText}
        ></textarea></span>
        <div style={noteStyling.date}>Left : {characterLimit-noteText.length}</div>
        <div style={noteStyling.button}>
        <button style={noteStyling.hold}  onClick={handleHoldNote}>Stick it!</button></div>
            
    </div>
    </>
)}
export default AddNote;
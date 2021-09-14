import React from 'react'
import {MdDeleteForever} from 'react-icons/md';

var noteStyling = {
    div:{ 
        color:"black",
        background:"#FFF7AE",
        borderRadius:"5px",
        width: "100",
        overflowWrap:'break-word',
        minHeight :"9.25rem",
        minWidth:'120px',
        margin:"0.4rem"
    },
        small:{
            borderRadius:"2.5px",
            margin:"0.125px",
            display:"block",
            margin:"0.5rem",
            minHeight:"6rem",
            color:'#343A40',
            whiteSpace:'pre-wrap'
        },
        icon:{
            fontSize:'20px',
            color:'darkred',
            textAlign:'right',
            float:"right",
            
        },
        date:{
           
            marginLeft:'5px',
            fontSize:"12px",
            display:"inline",
            color:"black"
        }


    }

export const Note = ({id, text, date, handleDeleteNote}) => {
    return (
        <div style ={noteStyling.div} className="note">
            <span style={noteStyling.small}>{text}</span>
            <p style={noteStyling.date}>{date}</p>
                <MdDeleteForever onClick={()=>handleDeleteNote(id)} style={noteStyling.icon} className = "delete-icon" size = "1.3em"/>
        </div>
    )
}
export default Note;
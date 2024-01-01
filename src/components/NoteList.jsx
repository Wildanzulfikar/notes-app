import React from "react";
import NoteItem from "./NoteContent";

function NoteList({notes}) {
    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                <NoteItem key={note.id} {...note} />
                ))
            }
        </div> 
    ) 
}

export default NoteList;
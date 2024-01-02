import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onDelete}) {

    if(notes.length >= 1) {
        return (
            <div className="notes-list">
            {
                notes.map((note) => (
                <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
                ))
            }
        </div> 
        )
    }else {
        return (
            <div className="notes-list__empty-message">
                <p>Tidak Ada Data Yang ditampilkan</p>
            </div>
        ) 
    }
}

export default NoteList;
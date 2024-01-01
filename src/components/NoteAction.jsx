import React from "react";

function NoteAction() {
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button">Delete</button>
            <button className="note-item__archive-button">Arsip</button>
        </div>
    )
}

export default NoteAction;
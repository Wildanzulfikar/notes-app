import React from "react";
import NoteContent from "./NoteContent";
import NoteAction from "./NoteAction";

function NoteItem ({title, createdAt, body}){
    return (
        <div className="note-item">
            <NoteContent title={title} createdAt={createdAt} body={body} />
            <NoteAction/>
        </div>
    )
}

export default NoteItem;
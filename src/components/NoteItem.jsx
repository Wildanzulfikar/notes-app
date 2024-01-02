import React from "react";
import NoteContent from "./NoteContent";
import NoteAction from "./NoteAction";

function NoteItem ({title, createdAt, body, id, onDelete}){
    return (
        <div className="note-item">
            <NoteContent title={title} createdAt={createdAt} body={body} />
            <NoteAction id={id} onDelete={onDelete}/>
        </div>
    )
}

export default NoteItem;
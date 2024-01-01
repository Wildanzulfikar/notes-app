import React from "react";
import NavApp from "./NavApp";
import FormApp from "./FormApp";
import {getInitialData} from '../utils/index';
import NoteArsip from "./NoteArsip";
import NoteList from "./NoteList";

function NoteApp(){

  const notes = getInitialData();

  return (
    <>
      <NavApp />
      <div className="note-app__body">
        <FormApp />
        <NoteList notes={notes} />
        <NoteArsip />
      </div>
    </>
  )
}

export default NoteApp;
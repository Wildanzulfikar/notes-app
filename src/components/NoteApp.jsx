import React from "react";
import NavApp from "./NavApp";
import FormApp from "./FormApp";
import {getInitialData} from '../utils/index';
import { showFormattedDate } from "../utils/index";
import NoteArsip from "./NoteArsip";
import NoteList from "./NoteList";

class NoteApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notes : getInitialData(),
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
          } 
        ]
      }
    });
  }

  render() {
    return (
    <>
      <NavApp />
      <div className="note-app__body">
        <FormApp addNote={this.onAddNoteHandler}/>
        <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler}/>
        <NoteArsip />
      </div>
    </>
    )
  }
}

export default NoteApp;
import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
import NoteInput from "../component/NoteInput";

function AddNotePage() {
  const navigation = useNavigate();
  function onAddNoteHandler(note) {
    addNote(note);
    navigation("/");
  }
  return (
    <section className="add-new-page__page">
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddNotePage;

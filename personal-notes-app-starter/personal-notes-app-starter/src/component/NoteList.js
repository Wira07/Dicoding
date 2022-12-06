import React from "react";
import PropTypes from "prop-types";
import NoteItemList from "./NoteItemList";

function NoteList({ notes }) {
  if (notes.length) {
    return (
      <section className="note-list">
        {notes.map((note) => (
          <NoteItemList key={note.id} id={note.id} {...note} />
        ))}
      </section>
    );
  } else {
    return <div className="note-list__empty-message">Tidak Ada Catatan</div>;
  }
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;

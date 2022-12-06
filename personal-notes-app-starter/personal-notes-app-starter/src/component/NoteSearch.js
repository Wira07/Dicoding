import React from "react";
import PropTypes from "prop-types";

function NoteSearch({ key, keyChange }) {
  return (
    <section className="search-bar">
      <input type="text" placeholder="Cari berdasarkan judul ..." value={key} onChange={(event) => keyChange(event.target.value)} />
    </section>
  );
}

NoteSearch.propType = {
  key: PropTypes.string.isRequired,
  keyChange: PropTypes.func.isRequired,
};

export default NoteSearch;

import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/local-data";
import NoteList from "../component/NoteList";
import NoteSearch from "../component/NoteSearch";

function NoteArchived() {
  const [searchParams, setSearchParams] = useSearchParams();
  const key = searchParams.get("key") || "";
  function changeSearchParams(key) {
    setSearchParams({ key });
  }
  return <Archived defaultKey={key} keyChange={changeSearchParams} />;
}

class Archived extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
      key: props.defaultKey || "",
    };
    this.onKeyChangeHandler = this.onKeyChangeHandler.bind(this);
  }

  onKeyChangeHandler(key) {
    this.setState(() => {
      return {
        key,
      };
    });
    this.props.keyChange(key);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.key.toLowerCase());
    });

    return (
      <section className="archives-page">
        <h1>Catatan Arsip</h1>
        <NoteSearch key={this.state.key} keyChange={this.onKeyChangeHandler} />
        <NoteList notes={notes} />
      </section>
    );
  }
}

Archived.propTypes = {
  defaultKey: PropTypes.string.isRequired,
  keyChange: PropTypes.func.isRequired,
};

export default NoteArchived;

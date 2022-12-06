import React from "react";
import PropTypes from "prop-types";
import { useSearchParams, Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { getActiveNotes } from "../utils/local-data";
import NoteList from "../component/NoteList";
import NoteSearch from "../component/NoteSearch";

function BodyNote() {
  const [searchParams, setSearchParams] = useSearchParams();
  const key = searchParams.get("key") || "";
  function changeSearchParams(key) {
    setSearchParams({ key });
  }
  return <Home defaultKey={key} keyChange={changeSearchParams} />;
}

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
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
      <section className="homepage">
        <h1>Catatan Aktif</h1>
        <NoteSearch key={this.state.key} keyChange={this.onKeyChangeHandler} />
        <NoteList notes={notes} />
        <div className="homepage__action">
          <Link to="/add">
            <button className="action" type="button" title="Tambah">
              <FiPlus />
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  defaultKey: PropTypes.string.isRequired,
  keyChange: PropTypes.func.isRequired,
};

export default BodyNote;

import React from "react";
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";
import ActiveButton from "../component/ActiveButton";
import NoteItemBody from "../component/NoteItemBody";
import NoteNotFound from "./NoteNotFound";

function DetailWrapper() {
  const navigate = useNavigate();
  const { id } = useParams();
  return <Detail id={id} navigate={navigate} />;
}

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onUnArchivedHandler = this.onUnArchivedHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onArchivedHandler() {
    archiveNote(this.state.note.id);
    this.props.navigate("/");
  }

  onUnArchivedHandler() {
    unarchiveNote(this.state.note.id);
    this.props.navigate("/");
  }

  onDeleteHandler() {
    deleteNote(this.state.note.id);
    this.props.navigate("/");
  }

  render() {
    if (this.state.note) {
      return (
        <section className="detail-page">
          <NoteItemBody {...this.state.note} />
          <div className="detail-page__action">
            <ActiveButton isArchive={this.state.note.archived} onDelete={this.onDeleteHandler} onArchive={this.onArchivedHandler} onUnArchive={this.onUnArchivedHandler} />
          </div>
        </section>
      );
    } else {
      return <NoteNotFound />;
    }
  }
}

Detail.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default DetailWrapper;

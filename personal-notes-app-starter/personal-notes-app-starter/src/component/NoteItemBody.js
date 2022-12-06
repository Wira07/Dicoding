import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/index";

function NoteItemBody({ title, body, createdAt }) {
  return (
    <>
      <h1 className="detail-page__title">{title}</h1>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{body}</div>
    </>
  );
}

NoteItemBody.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItemBody;

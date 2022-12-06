import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/index";

function ArchiveButton({ title, body, createdAt }) {
  <>
    <h2 className="detail-page__title">{title}</h2>
    <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
    <div className="detail-page__body">{body}</div>
  </>;
}

ArchiveButton.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default ArchiveButton;

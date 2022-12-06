import React from "react";
import PropTypes from "prop-types";
import { FiTrash2 } from "react-icons/fi";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";

function ActiveButton({ isArchive, onArchive, onUnArchive, onDelete }) {
  return (
    <div className="detail-page__action">
      {isArchive ? (
        <button className="action" type="button" title="Aktif" onClick={onUnArchive}>
          <BiArchiveOut />
        </button>
      ) : (
        <button className="action" type="button" title="Arsip" onClick={onArchive}>
          <BiArchiveIn />
        </button>
      )}

      <button className="action" type="button" title="Hapus" onClick={onDelete}>
        <FiTrash2 />
      </button>
    </div>
  );
}

ActiveButton.propTypes = {
  isArchive: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ActiveButton;

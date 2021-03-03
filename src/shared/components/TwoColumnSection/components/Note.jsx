import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ title, description }) => description && (
  <div className="note">
    {title && <h5 className="note-title">{title}</h5>}
    <p className="note-description">{description}</p>
  </div>
);

Note.propTypes = {
  html: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Note.defaultProps = {
  html: '',
};

export default Note;

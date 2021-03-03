import React from 'react';
import PropTypes from 'prop-types';

const Html = ({ html }) => html && (
  <div className="html">
    {html}
  </div>
);

Html.propTypes = {
  html: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Html.defaultProps = {
  html: '',
};

export default Html;

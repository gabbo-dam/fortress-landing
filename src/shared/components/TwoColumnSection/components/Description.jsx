import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ description }) => description && (
  <div className="description">
    {description}
  </div>
);

Description.propTypes = {
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Description.defaultProps = {
  description: '',
};

export default Description;

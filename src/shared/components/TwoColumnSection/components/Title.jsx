import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => title && (
  <h2 className="title">{title}</h2>
);

Title.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Title.defaultProps = {
  title: '',
};

export default Title;

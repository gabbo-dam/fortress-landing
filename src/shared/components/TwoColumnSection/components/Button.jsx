import React from 'react';
import PropTypes from 'prop-types';

import { noop } from '../../../../utils';

const Button = ({ title, onClick }) => title && (
  <button type="button" className="primary-button" onClick={onClick}>{title}</button>
);

Button.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  title: '',
  onClick: noop,
};

export default Button;

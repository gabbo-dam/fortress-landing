import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { noop } from '../../../../utils';

const Anchor = ({ title, url, onClick }) => title && url && (
  <Link className="link primary-button" to={url} onClick={onClick}>{title}</Link>
);

Anchor.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  url: PropTypes.string,
  onClick: PropTypes.func,
};

Anchor.defaultProps = {
  title: '',
  url: '',
  onClick: noop,
};

export default Anchor;

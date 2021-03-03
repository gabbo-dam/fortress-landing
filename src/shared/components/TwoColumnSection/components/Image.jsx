import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Image = ({ src, radius, fullScreen }) => (
  <div
    className={
      classNames(
        'two-column-image-container',
        { 'show-rounded': radius },
        { 'full-image': fullScreen },
      )
    }
    style={radius ? { width: typeof radius === 'string' ? `calc(${radius} * 2)` : radius * 2 } : {}}
  >
    <img
      className="img"
      src={src}
      alt=""
    />
  </div>
);

Image.propTypes = {
  src: PropTypes.string,
  radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fullScreen: PropTypes.bool,
};

Image.defaultProps = {
  src: null,
  radius: 0,
  fullScreen: false,
};

export default Image;

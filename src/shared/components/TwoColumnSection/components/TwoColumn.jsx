import React from 'react';
import PropTypes from 'prop-types';
import TwoColumnDictionary from './TwoColumnDictionary';

import { noop } from '../../../../utils';

const TwoColumn = ({ components }) => {
  const componentDict = TwoColumnDictionary({ ...components });
  let temp = [];

  return Object.keys(components).reduce((acc, componentKey, index, self) => {
    if (!(componentDict[componentKey] && componentDict[componentKey].isContent)) {
      if (temp.length > 0) {
        acc.push(<div className="content"> {temp} </div>);
        temp = [];
      }
      acc.push(componentDict[componentKey].component);
    } else {
      temp.push(componentDict[componentKey].component);
    }
    if ((index === self.length - 1) && temp.length > 0) {
      acc.push(<div className="content">{temp}</div>);
      temp = [];
    }
    return acc;
  }, []).filter(item => item !== undefined);
};

TwoColumn.propTypes = {
  components: PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    html: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    note: PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    }),
    list: PropTypes.instanceOf(Array),
    table: PropTypes.shape({
      data: PropTypes.instanceOf(Array).isRequired,
      isHorizontal: PropTypes.bool,
      hasHeader: PropTypes.bool,
    }),
    link: PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      url: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    }),
    button: PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
      onClick: PropTypes.func,
    }),
    image: PropTypes.instanceOf(Object),
    video: PropTypes.instanceOf(Object),
  }),
};

TwoColumn.defaultProps = {
  components: {
    title: '',
    description: '',
    html: '',
    note: {
      title: '',
      description: '',
    },
    list: [],
    table: {
      data: [],
      isHorizontal: false,
      hasHeader: true,
    },
    link: {
      title: '',
      url: '/',
      onClick: noop,
    },
    button: {
      title: '',
      onClick: noop,
    },
    image: null,
    video: null,
  },
};

export default TwoColumn;

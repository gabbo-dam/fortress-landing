import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-array-index-key */

const TwoColumnTable = ({ data, isHorizontal, hasHeader }) => data
  && Array.isArray(data) && data.length > 0 && (
    <div className="table-container">
      <table>
        {
          data.map((item, itemIndex) => (
            <tr key={itemIndex}>
              {
                item.map((cell, cellIndex) => (
                  isHorizontal // eslint-disable-line no-nested-ternary
                    ? (hasHeader && itemIndex === 0)
                      ? <th key={cellIndex}>{cell}</th>
                      : <td key={cellIndex}>{cell}</td>
                    : (hasHeader && cellIndex === 0)
                      ? <th key={cellIndex}>{cell}</th>
                      : <td key={cellIndex}>{cell}</td>
                ))
              }
            </tr>
          ))
        }
      </table>
    </div>
  );

TwoColumnTable.propTypes = {
  data: PropTypes.instanceOf(Array),
  isHorizontal: PropTypes.bool,
  hasHeader: PropTypes.bool,
};

TwoColumnTable.defaultProps = {
  data: [],
  isHorizontal: false,
  hasHeader: true,
};

export default TwoColumnTable;

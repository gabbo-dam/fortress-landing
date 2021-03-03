import React from 'react';
import PropTypes from 'prop-types';

// import { ReactComponent as TickIcon } from '../../../../assets/icons/app-logo.png';

const List = ({ list }) => list && Array.isArray(list) && list.length > 0 && (
  <ul className="list">
    {
      list.map(listItem => (
        <li className="list-item" key={listItem}>
          {/* <TickIcon width={32} height={32} viewBox="0 0 32 32" /> */}
          {
            typeof listItem === 'string'
              ? <span>{listItem}</span>
              : (
                <div className="item-content">
                  <h3>{listItem.header}</h3>
                  <span>{listItem.item}</span>
                  {
                    listItem.items && listItem.items.length > 0
                    && (
                      <ul>
                        {
                          listItem.items.map(item => (
                            <li key={item}><span>{item}</span></li>
                          ))
                        }
                      </ul>
                    )
                  }
                </div>
              )
          }
        </li>
      ))
    }
  </ul>
);

List.propTypes = {
  list: PropTypes.instanceOf(Array),
};

List.defaultProps = {
  list: [],
};

export default List;

import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import fortressIcon from '../../../../assets/icons/fortress.svg';

const options = [
  {
    key: 'fuel',
    text: (
      <div className="selected-token">
        <img src={fortressIcon} className="ui avatar image" alt="coin" />
        <div className="token-symbol">FUEL</div>
      </div>
    ),
    value: 'FUEL',
  },
];

const MarketInfo = () => (
  <div className="market-stats-info-wrapper">
    <div className="market-stats-info-content">
      <h2 className="title">Marketinfo</h2>
      <div className="market-stats-info">
        <div className="token-select-price">
          <FormControl color="#fff" variant="outlined" classes={{ root: 'token-price-dropdown' }}>
            <Select
              // onChange={(event) => handleState({ token: event.target.value })}
              defaultValue={options[0].value}
            >
              {
                options.map((option) => (
                  <MenuItem value={option.value}>{option.text}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <div className="token-price">
            <div className="price-label">Price</div>
            <div className="token-price">$2.23</div>
          </div>
        </div>
        <div className="token-details">
          <div className="total-supply">
            <div className="label">Total Supply</div>
            <div className="value">$185,703,825.31</div>
          </div>
          <div className="no-of-suppliers">
            <div className="label">Number of Suppliers</div>
            <div className="value">644</div>
          </div>
          <div className="total-borrowed">
            <div className="label">Total Borrowed</div>
            <div className="value">$115,341,430.80</div>
          </div>
          <div className="Number of Borrowers">
            <div className="label">Number of Borrowers</div>
            <div className="value">831</div>
          </div>
          <div className="token-address">
            <div className="label">Token Address</div>
            <div className="token-address-value value">0xeca8...67c8</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MarketInfo;

import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import RectangleYellowVector from '../../../../assets/icons/rectangle-yellow-vector.svg';
import TurboFanImage from '../../../../assets/icons/trubofan.svg';
import DotDotImage from '../../../../assets/icons/dot-dot.svg';
import FUELImage from '../../../../assets/icons/fuel.svg';
import { TokenIconData } from '../earn-interest/TokenData';
import { addComma, numbersAfterDecimal, startAndEnd } from '../../../../utils/helper';

const MarketInfo = ({ tokenData, selectedToken, hanldeSelectedToken, selectedTokenDetails }) => (
  <div className="market-stats-info-wrapper" id="market-stats-info-wrapper">
    <div className="turbo_img_vector">
      <img src={TurboFanImage} alt="turbo" className="turbo" />
    </div>
    <div className="market-stats-info-content">
      <div className="img_vector">
        <img src={RectangleYellowVector} alt="rectangle vector" className="rectangle" />
      </div>
      <div className="dot_img_vector">
        <img src={DotDotImage} alt="dot dot" className="dot-dot" />
      </div>
      <h2 className="title">Marketinfo</h2>
      <div className="market-stats-info">
        <div className="token-select-price">
          <FormControl color="#fff" variant="outlined" classes={{ root: 'token-price-dropdown' }}>
            <Select
              onChange={(e) => hanldeSelectedToken(e)}
              defaultValue={selectedToken}
              IconComponent={ExpandMoreIcon}
              classes={{
                icon: 'expand-more-icon'
              }}
            >
              {
                tokenData.map((token) => (
                  <MenuItem classes={{ root: 'token-price-menu-item' }} value={token.underlyingSymbol}>
                    <div className="selected-token">
                      <img src={TokenIconData[token.underlyingSymbol]} className="ui avatar image" alt="coin" />
                      <div className="token-symbol">{token.underlyingSymbol}</div>
                    </div>
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
          <div className="token-price">
            <div className="price-label">Price</div>
            <div className="token-price">${numbersAfterDecimal(selectedTokenDetails && selectedTokenDetails.tokenPrice, 2)}</div>
          </div>
        </div>
        <div className="token-details">
          <div className="total-supply">
            <div className="label">Total Supply</div>
            <div className="value">${addComma(numbersAfterDecimal(selectedTokenDetails && selectedTokenDetails.totalSupplyUsd, 2))}</div>
          </div>
          <div className="no-of-suppliers">
            <div className="label">Number of Suppliers</div>
            <div className="value">{(selectedTokenDetails && selectedTokenDetails.supplierCount) || 0}</div>
          </div>
          <div className="total-borrowed">
            <div className="label">Total Borrowed</div>
            <div className="value">${addComma(numbersAfterDecimal(selectedTokenDetails && selectedTokenDetails.totalBorrowsUsd, 2))}</div>
          </div>
          <div className="Number of Borrowers">
            <div className="label">Number of Borrowers</div>
            <div className="value">{(selectedTokenDetails && selectedTokenDetails.borrowerCount) || 0}</div>
          </div>
          <div className="token-address">
            <div className="label">Token Address</div>
            <div className="token-address-value value">{selectedTokenDetails && startAndEnd(selectedTokenDetails.address)}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MarketInfo;

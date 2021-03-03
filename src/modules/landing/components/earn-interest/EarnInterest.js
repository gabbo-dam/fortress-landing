import React from 'react';
import { Button, FormControlLabel, IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import TwoColumnSectionContainer from '../../../../shared/components/TwoColumnSection/TwoColumnSectionContainer';
import TokenData from './TokenData';
import IOSSwitch from '../../../../shared/components/IOSSwitch';

const EarnIntereset = () => (
  <section className="earninterest-section-container">
    <TwoColumnSectionContainer
      className="earninterest-two-column-section"
      leftSection={{
        title: (
          <>
            <div className="sub-title">Savings</div>
            <div className="title">Earn interest on your assets</div>
          </>
        ),
        description: (
          <>
            <div className="description-content">Funds held within the protocol can earn APY's based on the market demand for that asset.
             Interest is earned by the block and can be used as collateral to borrow assets or to mint stablecoins.</div>
            <div className="launchfortress-wrapper">
              <Button className="launch-fortress-btn">
                Launch Fortress
                <IconButton
                  className="arrow-button"
                  disableTouchRipple
                  disableFocusRipple
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Button>
            </div>
          </>
        ),
      }}
      rightSection={{
        description: (
          <div className="tokens-data-wrapper">
            <div className="tokens-data">
              {
                TokenData.map(token => (
                  <div className="token-wrapper">
                    <div className="token-details">
                      <div className="token-icon-wrapper">
                        <img src={token.icon} alt={token.name} className="token-icon" />
                      </div>
                      <div className="token-info">
                        <div className="name">{token.name}</div>
                        <div className="symbol">{token.symbol}</div>
                      </div>
                    </div>
                    <div className="apy-details">
                      <div className="apy-perc">{token.apy}</div>
                      <div className="apy-label">APY</div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="viewmore-wrapper">
              <Button className="viewmore-btn">
                View More
                <IconButton
                  className="arrow-button"
                  disableTouchRipple
                  disableFocusRipple
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Button>
            </div>
            <div className="with-fts">
              <FormControlLabel
                control={
                  <IOSSwitch
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                  />
                }
                label="🔥 with FTS"
              />
            </div>
          </div>
        ),
      }}
      widthRatio="1:1"
    />
  </section>
);

export default EarnIntereset;

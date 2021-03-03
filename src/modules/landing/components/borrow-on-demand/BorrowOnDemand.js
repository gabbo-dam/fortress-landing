import React from 'react';
import { Button, IconButton } from '@material-ui/core';

import TwoColumnSectionContainer from '../../../../shared/components/TwoColumnSection/TwoColumnSectionContainer';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TokenData from '../earn-interest/TokenData';

const BorrowOnDemand = () => (
  <section className="earninterest-section-container">
    <TwoColumnSectionContainer
      className="earninterest-two-column-section"
      leftSection={{
        title: (
          <>
            <div className="sub-title">Borrow On-Demand</div>
            <div className="title">Access instant liquidity on Fortress</div>
          </>
        ),
        description: (
          <>
            <div className="description-content">Use your vToken collateral to borrow from the Venus Protocol instantly with no trading fees,
             no slippage and directly on-chain. With Fortress, you have on-demand liquidity available globally.</div>
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
                      <div className="apy-perc">{token.availableLiquidity}</div>
                      <div className="apy-label">Available Liquidity</div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="viewmore-wrapper">
              <Button className="viewmore-btn">
                View More
              </Button>
            </div>
          </div>
        ),
      }}
      widthRatio="1:1"
    />
  </section>
);

export default BorrowOnDemand;

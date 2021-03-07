import React from 'react';
import { Button, IconButton } from '@material-ui/core';

import TwoColumnSectionContainer from '../../../../shared/components/TwoColumnSection/TwoColumnSectionContainer';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { TokenIconData } from '../earn-interest/TokenData';
import BorrowYellowVector from '../../../../assets/icons/borrow-yellow-vector.svg';
import BlackPlanImage from '../../../../assets/icons/black-plane.svg';
import YellowCircleVector from '../../../../assets/icons/yellow-cirlce-vector.svg';
import HalfYellowVector from '../../../../assets/icons/half-yellow-vector.svg';
import { addComma, numbersAfterDecimal } from '../../../../utils/helper';

const BorrowOnDemand = ({ newTokenData, viewMoreToggle, onViewMoreClick }) => (
  <section className="earninterest-section-container borrow-on-demand-container" id="borrow-on-demand-container">
    <div className="half-yellow-vector-wrapper">
      <img src={HalfYellowVector} alt="yellow vector" className="half-yellow-vector" />
    </div>
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
            <div className="description-content">Use your fToken collateral to borrow from the Fortress Protocol instantly with no trading fees,
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
        html: (
          <div className="left-img-vectors">
            <img src={YellowCircleVector} alt="yellow circle" className="yellow-circle-vector" />
            <img src={BlackPlanImage} alt="black can" className="black-can" />
          </div>
        )
      }}
      rightSection={{
        description: (
          <div className="tokens-data-wrapper-container">
            <div className="yellow-vector-wrapper">
              <img src={BorrowYellowVector} alt="yellow vector" className="earninterest-yellow-vector" />
            </div>
            <div className="tokens-data-wrapper">
              <div className="tokens-data">
                {
                  newTokenData && newTokenData.map(token => (
                    <div className="token-wrapper">
                      <div className="token-details">
                        <div className="token-icon-wrapper">
                          <img src={TokenIconData[token.underlyingSymbol]} alt={token.name} className="token-icon" />
                        </div>
                        <div className="token-info">
                          <div className="name">{token.underlyingName}</div>
                          <div className="symbol">{token.underlyingSymbol}</div>
                        </div>
                      </div>
                      <div className="apy-details">
                        <div className="apy-perc">${addComma(numbersAfterDecimal(token.liquidity))}</div>
                        <div className="apy-label">Available Liquidity</div>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className="viewmore-wrapper">
                <Button
                  className="viewmore-btn yellow-border-btn"
                  onClick={() => onViewMoreClick()}
                >
                  {viewMoreToggle ? 'View Less' : 'View More'}
                </Button>
              </div>
            </div>
          </div>
        ),
      }}
      widthRatio="1:1"
    />
  </section>
);

export default BorrowOnDemand;

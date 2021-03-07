import React from 'react';
import { Button, FormControlLabel, IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import TwoColumnSectionContainer from '../../../../shared/components/TwoColumnSection/TwoColumnSectionContainer';
import { TokenIconData } from './TokenData';
import IOSSwitch from '../../../../shared/components/IOSSwitch';
import EarnInterestYellowVector from '../../../../assets/icons/earninterest-yellow-vector.svg';
import YellowCircleVector from '../../../../assets/icons/yellow-cirlce-vector.svg';
import BlackCanIcon from '../../../../assets/icons/black-can.svg';
import Wave1 from '../../../../assets/icons/wave1.svg';
import Wave2 from '../../../../assets/icons/wave2.svg';
import Wave3 from '../../../../assets/icons/wave3.svg';

const EarnIntereset = ({
  newTokenData, viewMoreToggle, handleState,
  onViewMoreClick, withFAI, onWithFAIChange,
}) => (
  <section className="earninterest-section-container" id="earninterest-section-container">
    <div className="wave_img_vector">
      <img src={Wave1} alt="wave" className="wave1 wave" />
      <img src={Wave2} alt="wave" className="wave2 wave" />
      <img src={Wave3} alt="wave" className="wave3 wave" />
    </div>
    <TwoColumnSectionContainer
      className="earninterest-two-column-section"
      leftSection={{
        title: (
          <div className="left-section-wrapper">
            <div className="sub-title">Savings</div>
            <div className="title">Earn interest on your assets</div>
          </div>
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
        html: (
          <div className="left-img-vectors">
            <img src={YellowCircleVector} alt="yellow circle" className="yellow-circle-vector" />
            <img src={BlackCanIcon} alt="black can" className="black-can" />
          </div>
        )
      }}
      rightSection={{
        description: (
          <div className="tokens-data-wrapper-container">
            <div className="yellow-vector-wrapper">
              <img src={EarnInterestYellowVector} alt="yellow vector" className="earninterest-yellow-vector" />
            </div>
            <div className="tokens-data-wrapper">
              <div className="tokens-data">
                {
                  newTokenData.map(token => (
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
                        <div className="apy-perc">{withFAI ? (Number(token.supplyApy) + Number(token.supplyVenusApy)).toFixed(2) : Number(token.supplyApy).toFixed(2)}%</div>
                        <div className="apy-label">APY</div>
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
              <div className="with-fts">
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={withFAI}
                      name="checkedB"
                      onChange={() => onWithFAIChange()}
                    />
                  }
                  label=""
                  classes={{
                    root: 'with-fts-form-label'
                  }}
                />
                <div className={`with-fts-label ${withFAI ? 'active' : 'inactive'}`}>
                  <div className="lit">🔥&nbsp;</div>
                  <div className="fai">{withFAI ? 'with' : 'without'} FAI</div>
                </div>
              </div>
            </div>
          </div>
        ),
      }}
      widthRatio="1:1"
    />
  </section>
);

export default EarnIntereset;

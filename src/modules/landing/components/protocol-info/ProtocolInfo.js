import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import TwoColumnSectionContainer from '../../../../shared/components/TwoColumnSection/TwoColumnSectionContainer';
import ProtocolInfoImage from '../../../../assets/icons/protocol.svg';
import FUELImage from '../../../../assets/icons/fuel.svg';
import BUSDImage from '../../../../assets/icons/busd.svg';
import FortressImage from '../../../../assets/icons/fortress.svg';

const ProtocolInfo = () => (
  <section className="protocolinfo-section-container">
    <div className="protocolinfo-section">
      <TwoColumnSectionContainer
        className="protocolinfo-two-column-section"
        leftSection={{
          title: (
            <div className="icon">
              <img src={ProtocolInfoImage} alt="protocolinfo" className="protocolinfo-image" />
              {/* <div class="info-anime__logos">
                <div class="info-anime__logo"><span class="svg-image-binance-logo"></span></div>
                <div class="info-anime__logo"><span class="svg-image-swipe-logo"></span></div>
                <div class="info-anime__logo"><span class="svg-image-vai-logo"></span></div>
              </div> */}
              <div className="protocol-logos">
                <div className="fuel-wrapper logo-wrapper"><img src={FUELImage} alt="fuel" className="fuel-image img" /></div>
                <div className="busd-wrapper logo-wrapper"><img src={BUSDImage} alt="busd" className="busd-image img" /></div>
                <div className="fortress-wrapper logo-wrapper"><img src={FortressImage} alt="fortress" className="fortress-image img" /></div>
              </div>
            </div>
          ),
        }}
        rightSection={{
          title: (
            <>
              <div className="sub-title">Protocol</div>
              <div className="title">Money Markets built on Binance Smart Chain</div>
            </>
          ),
          description: (
            <>
              <div className="description">You can now tokenize your assets utilizing the Binance Smart Chain and receive portable
               vTokens that you can freely move around to cold storage, transfer to other users, and more.</div>
              <div className="whitepaper-wrapper">
                <Button
                  // variant="primary"
                  className="read-whitepaper-btn yellow-border-btn"
                >
                  Read the white paper
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
        widthRatio="1:1"
      />
    </div>
  </section>
);

export default ProtocolInfo;

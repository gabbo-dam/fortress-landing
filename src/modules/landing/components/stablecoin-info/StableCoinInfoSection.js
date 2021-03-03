import { Button } from '@material-ui/core';
import React from 'react';

import TwoColumnSectionContainer from '../../../../shared/components/TwoColumnSection/TwoColumnSectionContainer';
import StablecoinIcon from '../../../../assets/icons/stablecoin-icon.svg';
import StablecoinImage from '../../../../assets/icons/stablecoin-image.png';
import RectangleShadow from '../../../../assets/icons/rectangle-shadow.png';

const StableCoinInfoSection = () => (
  <section className="stablecoin-section-container">
    <div className="stablecoin-section">
      <TwoColumnSectionContainer
        className="stablecoin-two-column-section"
        leftSection={{
          title: (
            <div className="icon">
              <img src={StablecoinIcon} alt="Stablecoin" className="stablecoin-image" />
            </div>
          ),
          description: (
            <>
              <div className="description">Fortress enables the world's first decentralized stablecoin, SFT, 
              built on Binance Smart Chain that is backed by a basket of stablecoins and crypto assets without centralized control.</div>
              <div className="learnmore-wrapper">
                <Button
                  variant="contained"
                  className="learnmore-btn"
                >
                  Learn More
                </Button>
              </div>
            </>
          ),
        }}
        rightSection={{
          description: (
            <>
              <img src={StablecoinImage} alt="stablecoin" className="stablecoin-image" />
              <img src={RectangleShadow} alt="rectangle" className="rectangle" />
            </>
          ),
        }}
        widthRatio="4:5"
      />
    </div>
  </section>
);

export default StableCoinInfoSection;

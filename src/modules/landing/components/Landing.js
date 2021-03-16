import React from 'react';
import { connect } from 'react-redux';

import AppHeader from '../../../shared/components/AppHeader/AppHeaderContainer';
import MoneyMarketsSection from './money-markets/MoneyMarketsSectionContainer';
import StableCoinInfoSection from './stablecoin-info/StableCoinInfoSectionContainer';
import ProtocolInfoSection from './protocol-info/ProtocolInfoContainer';
import EearnInterestSection from './earn-interest/EarnInterestContainer';
import BorrowOnDemandSection from './borrow-on-demand/BorrowOnDemandContainer';
import MarketInfoSection from './market-info/MarketInfoContainer';

const Landing = ({ theme }) => (
  <div className={` landing ${theme}`}>
    <div className="money-market-wrapper">
      <div className="ellipse_img_vector-wrapper">
        <div className="ellipse_img_vector">
          <div className="ellipse1-wrapper" style={{ position: 'relative' }}>
            {[1, 2, 3, 4, 5].map((ball) => (
              <div
                key={ball}
                className={`ball ball${ball}`}
                style={{ position: 'absolute' }}
              />
            ))}
            <svg width="1920" height="1300" fill="none" color="black">
              <path
                d="M-200,300a400,400 0 1,0 800,0a400,400 0 1,0 -800,0"
                stroke={theme === 'dark' ? 'white' : 'black'}
                strokeOpacity=".1"
                strokeWidth="1"
              />
              <circle
                cx="200"
                cy="300"
                r="650"
                stroke={theme === 'dark' ? 'white' : 'black'}
                strokeOpacity=".1"
                strokeWidth="1"
              />
              <circle
                cx="200"
                cy="300"
                r="900"
                stroke={theme === 'dark' ? 'white' : 'black'}
                strokeOpacity=".1"
                strokeWidth="1"
              />
              <circle
                cx="200"
                cy="300"
                r="1250"
                stroke={theme === 'dark' ? 'white' : 'black'}
                strokeOpacity=".1"
                strokeWidth="1"
              />
              <circle
                cx="200"
                cy="300"
                r="1550"
                stroke={theme === 'dark' ? 'white' : 'black'}
                strokeOpacity=".1"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
      <AppHeader />
      <MoneyMarketsSection />
      <StableCoinInfoSection />
    </div>
    <EearnInterestSection />
    <ProtocolInfoSection />
    <BorrowOnDemandSection />
    <MarketInfoSection />
  </div>
);

const mapStateToProps = (state) => ({
  theme: state.landing.theme,
});

export default connect(mapStateToProps)(Landing);

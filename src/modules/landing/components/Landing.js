import React from 'react';

import AppHeader from '../../../shared/components/AppHeader/AppHeaderContainer';
import MoneyMarketsSection from './money-markets/MoneyMarketsSectionContainer';
import StableCoinInfoSection from './stablecoin-info/StableCoinInfoSectionContainer';
import ProtocolInfoSection from './protocol-info/ProtocolInfoContainer';
import EearnInterestSection from './earn-interest/EarnInterestContainer';
import BorrowOnDemandSection from './borrow-on-demand/BorrowOnDemandContainer';
import MarketInfoSection from './market-info/MarketInfoContainer';
import Ellipse1 from '../../../assets/icons/ellipse1.svg';
import Ellipse2 from '../../../assets/icons/ellipse2.svg';
import Ellipse3 from '../../../assets/icons/ellipse3.svg';
import Ellipse4 from '../../../assets/icons/ellipse4.svg';
import Ellipse5 from '../../../assets/icons/ellipse5.svg';

const Landing = () => (
  <div className="landing" >
    <div className="money-market-wrapper">
      <div className="ellipse_img_vector">
        <img src={Ellipse1} alt="ellipse1" className="ellipse1 ellipse" />
        <img src={Ellipse2} alt="ellipse1" className="ellipse2 ellipse" />
        <img src={Ellipse3} alt="ellipse1" className="ellipse3 ellipse" />
        <img src={Ellipse4} alt="ellipse1" className="ellipse4 ellipse" />
        {/* <div> */}
          <img src={Ellipse5} alt="ellipse1" className="ellipse5 ellipse" />
        {/* </div> */}
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

export default Landing;

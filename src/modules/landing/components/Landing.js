import React from 'react';

import AppHeader from '../../../shared/components/AppHeader/AppHeaderContainer';
import MoneyMarketsSection from './money-markets/MoneyMarketsSectionContainer';
import StableCoinInfoSection from './stablecoin-info/StableCoinInfoSectionContainer';
import ProtocolInfoSection from './protocol-info/ProtocolInfoContainer';
import EearnInterestSection from './earn-interest/EarnInterestContainer';
import BorrowOnDemandSection from './borrow-on-demand/BorrowOnDemandContainer';
import MarketInfoSection from './market-info/MarketInfoContainer';

const Landing = () => (
  <div className="landing" >
    <div className="money-market-wrapper">
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

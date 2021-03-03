import React from 'react';

import AppHeader from '../../../shared/components/AppHeader/AppHeaderContainer';
import MoneyMarketsSection from './money-markets/MoneyMarketsSectionContainer';
import StableCoinInfoSection from './stablecoin-info/StableCoinInfoSectionContainer';
import ProtocolInfoSection from './protocol-info/ProtocolInfoContainer';
import EearnInterestSection from './earn-interest/EarnInterestContainer';
import BorrowOnDemandSection from './borrow-on-demand/BorrowOnDemandContainer';

const Landing = () => (
  <div className="landing" >
    <div className="money-market-wrapper">
      <AppHeader />
      <MoneyMarketsSection />
    </div>
    <StableCoinInfoSection />
    <EearnInterestSection />
    <ProtocolInfoSection />
    <BorrowOnDemandSection />
  </div>
);

export default Landing;

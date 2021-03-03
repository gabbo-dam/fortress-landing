import React from 'react';

import TwoColumnSectionContainer from '../../../../shared/components/TwoColumnSection/TwoColumnSectionContainer';
import YelloVectorImage from '../../../../assets/icons/yellow-vector.png';
import PistonAircraftEngineImage from '../../../../assets/icons/piston-aircraft-engine.png';
import DecentralizedVectorIcon from '../../../../assets/icons/decentralized-vector.svg';
import BEP20VectorIcon from '../../../../assets/icons/bep20-vector.svg';
import ScalableVectorIcon from '../../../../assets/icons/scalable-vector.svg';
import { Button } from '@material-ui/core';

const marketInfoStates = [
  {
    icon: DecentralizedVectorIcon,
    title: 'Decentralized',
    description: 'Access an immutable money market protocol directly on-chain.'
  },
  {
    icon: BEP20VectorIcon,
    title: 'BEP-20',
    description: 'All Venus Protocol assets are bound by the BEP-20 standard.'
  },
  {
    icon: ScalableVectorIcon,
    title: 'Scalable',
    description: 'Built on Binance Smart Chain for fast, secure, and low cost transactions.'
  },
];

const MoneyMarketsSection = () => (
  <section className="moneymarket-section-container">
    <div className="moneymarket-section">
      <TwoColumnSectionContainer
        className="moneymarket-two-column-section"
        leftSection={{
          title: (
            <>
              <div className="sub-title">Fortress</div>
              <div className="title">Money Markets</div>
            </>
          ),
          description: (
            <>
              <div className="description-content">A Decentralized Marketplace for Lenders and Borrowers with Borderless Stablecoins.</div>
              <div className="launchapp-wrapper">
                <Button
                  variant="contained"
                  className="launchapp-btn"
                >
                  Launch App
                </Button>
              </div>
            </>
          ),
        }}
        rightSection={{
          description: (
            <>
              <img src={PistonAircraftEngineImage} alt="piston aircraft engine" className="piston-aircraft-image" />
              <img src={YelloVectorImage} alt="yellow vector" className="yellow-vector-image" />
            </>
          ),
        }}
        widthRatio="4:5"
      />
    </div>
    <div className="market-info-wrapper">
      <div className="market-info-content">
        {
          marketInfoStates.map(marketInfo => (
            <div className="market-info">
              <div className="title-wrapper">
                <div className="icon">
                  <img src={marketInfo.icon} alt="piston aircraft engine" className="piston-aircraft-image" />
                </div>
                <div className="title">{marketInfo.title}</div>
              </div>
              <div className="description">{marketInfo.description}</div>
            </div>
          ))
        }
      </div>
    </div>
  </section>
);

export default MoneyMarketsSection;

import React from 'react';
import styled from 'styled-components'
import { useCountUp } from 'react-countup'

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
    description: 'All Fortress Protocol assets are bound by the BEP-20 standard.'
  },
  {
    icon: ScalableVectorIcon,
    title: 'Scalable',
    description: 'Built on Binance Smart Chain for fast, secure, and low cost transactions.'
  },
];

const MoneyMarketsSection = () => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: 508890999.29,
    duration: 1,
    separator: ',',
   
  })


return(
  
  <section className="moneymarket-section-container">
    <div className="moneymarket-section">
      {/* <TwoColumnSectionContainer
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
                  onClick={() => { window.open(`https://bsctestnet.fortress.loans`, '_blank'); }}
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
      /> */}
      
      <StyledHero>
        
          <Title className="title">Fortress Total Protocol Value</Title>
          <Number >$

          
          {countUp}
          </Number>
          <Text className="title">A Decentralized Marketplace for <StyledText>Lenders and Borrowers</StyledText> with Borderless Stablecoins.</Text>
          <Button
            variant="contained"
            className="launchapp-btn"
            onClick={() => { window.open(`https://bsctestnet.fortress.loans`, '_blank'); }}
          >
            Enter App
          </Button>
        
      </StyledHero>
      
      
    </div>
    {/* <div className="market-info-wrapper">
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
    </div> */}
  </section>
)} ;



const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  
  margin: 0 0 29px 0;
  text-align: center;

  text-transform: capitalize;

 

  @media (max-width: 768px) {


  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  /* identical to box height, or 20px */
  margin: 200px 0 0 0;
  text-align: center;
  letter-spacing: -0.02em;
  text-transform: capitalize;



    }
`
const Number = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 102px;
  /* identical to box height */
  margin: 0;
  text-align: center;
  text-transform: capitalize;

  color: #F7C408;

  @media (max-width: 768px) {

  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 51px;
  /* identical to box height */

  margin: 0;

  text-align: center;
  text-transform: capitalize;

  color: #F7C408;
  }
`
const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  margin: 26px 0 71px 0;
  text-transform: capitalize;
  width: 56%;


  @media (max-width: 768px) {
    font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  width: 100%;


  }
  
`
const StyledText = styled.span`
  font-weight: bold;
`

const StyledHero = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 100%;
  }
`
const Flex = styled.div`

`

export default MoneyMarketsSection;

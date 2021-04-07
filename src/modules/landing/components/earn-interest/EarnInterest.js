import React, { useRef } from 'react';
import styled from 'styled-components'
import { Button, FormControlLabel, IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { connect } from 'react-redux';

import TwoColumnSectionContainer from '../../../../shared/components/TwoColumnSection/TwoColumnSectionContainer';
import { TokenIconData } from './TokenData';
import IOSSwitch from '../../../../shared/components/IOSSwitch';
import EarnInterestYellowVector from '../../../../assets/icons/earninterest-yellow-vector.svg';
import YellowCircleVector from '../../../../assets/icons/yellow-cirlce-vector.svg';
import BlackCanIcon from '../../../../assets/icons/black-can.svg';
import Wave1 from '../../../../assets/icons/wave1.svg';
import Wave1_light from '../../../../assets/icons/wave1_light.svg';
import Wave2 from '../../../../assets/icons/wave2.svg';
import Wave2_light from '../../../../assets/icons/wave2_light.svg';
import Wave3 from '../../../../assets/icons/wave3.svg';
import Wave3_light from '../../../../assets/icons/wave3_light.svg';
import Assets from './components/Assets'
import AssetsMobile from './components/AssetsMobile'
import Eth from '../../../../assets/logos/eth/eth.svg'

const EarnIntereset = ({
  newTokenData,
  viewMoreToggle,
  handleState,
  onViewMoreClick,
  withFTS,
  onWithFTSChange,
  theme,
}) => {
  const myRef = useRef(null);
  const colortheme = () => theme === 'dark' ?  '#fff'  : '#000';
  return (
    // <section
    //   ref={myRef}
    //   className="earninterest-section-container"
    //   id="earninterest-section-container"
    // >
    //   <div className="wave_img_vector">
    //     <img
    //       src={theme === 'dark' ? Wave1 : Wave1_light}
    //       alt="wave"
    //       className="wave1 wave"
    //     />
    //     <img
    //       src={theme === 'dark' ? Wave2 : Wave2_light}
    //       alt="wave"
    //       className="wave2 wave"
    //     />
    //     <img
    //       src={theme === 'dark' ? Wave3 : Wave3_light}
    //       alt="wave"
    //       className="wave3 wave"
    //     />
    //   </div>
    //   <TwoColumnSectionContainer
    //     className="earninterest-two-column-section"
    //     leftSection={{
    //       title: (
    //         <div className="left-section-wrapper">
    //           <div className="sub-title">Savings</div>
    //           <div className="title">Earn interest on your assets</div>
    //         </div>
    //       ),
    //       description: (
    //         <>
    //           <div className="description-content">
    //             Funds held within the protocol can earn APY's based on the
    //             market demand for that asset. Interest is earned by the block
    //             and can be used as collateral to borrow assets or to mint
    //             stablecoins.
    //           </div>
    //           <div className="launchfortress-wrapper">
    //             <Button
    //               className="launch-fortress-btn"
    //               onClick={() => { window.open(`https://bsctestnet.fortress.loans`, '_blank'); }}
    //             >
    //               Launch Fortress
    //               <IconButton
    //                 className="arrow-button"
    //                 disableTouchRipple
    //                 disableFocusRipple
    //               >
    //                 <ArrowForwardIcon />
    //               </IconButton>
    //             </Button>
    //           </div>
    //         </>
    //       ),
    //       html: (
    //         <div className="left-img-vectors">
    //           <img
    //             src={YellowCircleVector}
    //             alt="yellow circle"
    //             className="yellow-circle-vector"
    //           />
    //           <img src={BlackCanIcon} alt="black can" className="black-can" />
    //         </div>
    //       ),
    //     }}
    //     rightSection={{
    //       description: (
    //         <div className="tokens-data-wrapper-container">
    //           <div className="yellow-vector-wrapper">
    //             <img
    //               src={EarnInterestYellowVector}
    //               alt="yellow vector"
    //               className="earninterest-yellow-vector"
    //             />
    //           </div>
    //           <div className="tokens-data-wrapper">
    //             <div
    //               className={`tokens-data ${
    //                 viewMoreToggle ? 'active' : 'inactive'
    //               }`}
    //             >
    //               {newTokenData.map((token) => (
    //                 <div className="token-wrapper">
    //                   <div className="token-details">
    //                     <div className="token-icon-wrapper">
    //                       <img
    //                         src={TokenIconData[token.underlyingSymbol]}
    //                         alt={token.name}
    //                         className="token-icon"
    //                       />
    //                     </div>
    //                     <div className="token-info">
    //                       <div className="name">{token.underlyingName}</div>
    //                       <div className="symbol">{token.underlyingSymbol}</div>
    //                     </div>
    //                   </div>
    //                   <div className="apy-details">
    //                     <div className="apy-perc">
    //                       {withFTS
    //                         ? (
    //                             Number(token.supplyApy) +
    //                             Number(token.supplyFortressApy)
    //                           ).toFixed(2)
    //                         : Number(token.supplyApy).toFixed(2)}
    //                       %
    //                     </div>
    //                     <div className="apy-label">APY</div>
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //             <div className="viewmore-wrapper">
    //               <Button
    //                 className="viewmore-btn yellow-border-btn"
    //                 onClick={() => {
    //                   onViewMoreClick();
    //                   if (viewMoreToggle) {
    //                     myRef.current.scrollIntoView({ behavior: 'smooth' });
    //                   }
    //                 }}
    //               >
    //                 {viewMoreToggle ? 'View Less' : 'View More'}
    //               </Button>
    //             </div>
    //             <div className="with-fts">
    //               <FormControlLabel
    //                 control={
    //                   <IOSSwitch
    //                     checked={withFTS}
    //                     name="checkedB"
    //                     onChange={() => onWithFTSChange()}
    //                   />
    //                 }
    //                 label=""
    //                 classes={{
    //                   root: 'with-fts-form-label',
    //                 }}
    //               />
    //               <div
    //                 className={`with-fts-label ${
    //                   withFTS ? 'active' : 'inactive'
    //                 }`}
    //               >
    //                 <div className="lit">🔥&nbsp;</div>
    //                 <div className="fai">
    //                   {withFTS ? 'with' : 'without'} FTS
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ),
    //     }}
    //     widthRatio="1:1"
    //   />
    // </section>
    <>
    <Container>
      <Flex>
        <Container1>
          <Title style={{color: colortheme()}}>Assets</Title>
          <Text>Supply and borrow up to 11 assets to begin earning FTS</Text>
        </Container1>
        <Container2>
          <div style={{display: 'flex'}} className="with-fts">
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={withFTS}
                  name="checkedB"
                  onChange={() => onWithFTSChange()}
                />
              }
              label=""
              classes={{
                root: 'with-fts-form-label',
              }}
            />
            <div
            style={{ display: 'flex', alignItems: 'center'}}
              className={`with-fts-label ${
                withFTS ? 'active' : 'inactive'
              }`}
            >
              <div className="lit">🔥&nbsp;</div>
              <div style={{color: colortheme()}} className="fai">
                {withFTS ? 'with' : 'without'} FTS
              </div>
            </div>
        </div>
      </Container2>
      </Flex>
      </Container>
      <Table>
      <Mobile>
         <TableFlex2>
            <TableTitle style={{color: colortheme()}}>Assets</TableTitle>
            <TableTitle style={{color: colortheme()}}>Supply APY</TableTitle>
            <TableTitle style={{color: colortheme()}}>Borrow APY</TableTitle>
          </TableFlex2>
        <AssetsMobile theme={theme} />
        <AssetsMobile theme={theme} />
        <AssetsMobile theme={theme} />
        <AssetsMobile theme={theme} />
        <AssetsMobile theme={theme} />
        <AssetsMobile theme={theme} />
        <AssetsMobile theme={theme} />
      </Mobile>
        <DeskTop>
          <TableFlex>
            <TableTitle style={{color: colortheme()}}>Assets</TableTitle>
            <TableTitle style={{color: colortheme()}}>Supplied</TableTitle>
            <TableTitle style={{color: colortheme()}}>Borrowed</TableTitle>
            <TableTitle style={{color: colortheme()}}>Supply APY</TableTitle>
            <TableTitle style={{color: colortheme()}}>Borrow APY</TableTitle>
          </TableFlex>
            <Assets theme={theme}/>
            <Assets theme={theme}/>
            <Assets theme={theme}/>
            <Assets theme={theme}/>
            <Assets theme={theme}/>
            <Assets theme={theme}/>
        </DeskTop>
      </Table>
    </>
  );
};

const mapStateToProps = (state) => ({
  theme: state.landing.theme,
});

const MobileTable = styled.div`
  
`

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`

const DeskTop = styled.div`
display: block;
@media (max-width:768px){
  Display: none;
}
`
const Mobile = styled.div`
display: none;
@media (max-width:768px){
  Display: block;
}
`
const Asset = styled.p`
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 111%;
/* identical to box height, or 27px */

letter-spacing: -0.02em;
text-transform: capitalize;

color: #FFFFFF;

@media (max-width:768px){
  font-style: normal;
font-weight: bold;
font-size: 13px;
line-height: 111%;
/* or 14px */

text-align: center;
letter-spacing: -0.02em;
text-transform: capitalize;

color: #000000;
}

`
const SupplyAPY = styled.p`
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 111%;
/* identical to box height, or 27px */

letter-spacing: -0.02em;
text-transform: capitalize;

color: #FFFFFF;
@media (max-width:768px){
  font-style: normal;
font-weight: bold;
font-size: 13px;
line-height: 111%;
/* or 14px */

text-align: center;
letter-spacing: -0.02em;
text-transform: capitalize;

color: #000000;
}
`

const BorrowAPR = styled.p`
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 111%;
/* identical to box height, or 27px */

letter-spacing: -0.02em;
text-transform: capitalize;

color: #FFFFFF;
@media (max-width:768px){
  font-style: normal;
font-weight: bold;
font-size: 13px;
line-height: 111%;
/* or 14px */

text-align: center;
letter-spacing: -0.02em;
text-transform: capitalize;

color: #000000;
}
`

const StyledEth = styled.img`
margin: 0 10px -5px 0;

@media (max-width: 768px){
    width: 15px;
    margin: 0 10px -5px -15px;
}

`

const Container1 = styled.div``
const Container2 = styled.div``
const Flex = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width:768px){
  flex-direction: column;
}
`
const TableFlex = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
justify-content: space-between;
align-items: center;
width: 100%;
text-align: center;


@media (max-width:768px){
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  
  justify-content: space-around;
}
`

const TableFlex2 = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
justify-content: space-between;
align-items: center;
width: 100%;
text-align: center;

@media (max-width:768px){
  grid-template-columns: repeat(3, 1fr) 15%;
  width: 80%;
  margin: 0 auto;
  
  border-radius: 13px;
  justify-content: space-around;
}
`

const TableTitle = styled.h3`
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 111%;

/* identical to box height, or 27px */

letter-spacing: -0.02em;
text-transform: capitalize;

@media (max-width:768px){
  font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 111%;
/* or 14px */

letter-spacing: -0.02em;
text-transform: capitalize;

color: #000000;
}
`
const Table = styled.div`
width: 80%;
margin: 0 auto;

@media (max-width: 768px) {
  width: 100%;
  margin: 0 auto;
}
`


const Title = styled.h2`

  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 111%;
  /* identical to box height, or 40px */

  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #FFFFFF;

  // margin: 94px 0 14px 0;

  @media (max-width: 768px) {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 111%;
    /* or 24px */

    text-align: center;
    letter-spacing: -0.02em;
    text-transform: capitalize;
    margin:56px 0 12px 0;
    color: #FFFFFF;
  }

`
const Text = styled.p`

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  margin 0 0 54px 0;

  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: #939393;

  @media (max-width: 768px) {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;

    color: #939393;
  }
`

export default connect(mapStateToProps)(EarnIntereset);

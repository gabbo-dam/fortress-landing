import React from 'react';
import styled from 'styled-components'
import { Button, IconButton } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import TwoColumnSectionContainer from '../../../../shared/components/TwoColumnSection/TwoColumnSectionContainer';
import ProtocolInfoImage from '../../../../assets/icons/protocol.svg';
import FUELImage from '../../../../assets/icons/fuel.svg';
import BUSDImage from '../../../../assets/icons/busd.svg';
import FortressImage from '../../../../assets/icons/fortress.svg';
import bg2 from '../../../../assets/icons/bg2.svg'
import bg3 from '../../../../assets/icons/bg3.svg'

const ProtocolInfo = ({ theme }) =>{
  const cardtheme = () => theme === 'dark' ?  '#101010'  : '#F3F3F3';
  return(
  
  // <section className="protocolinfo-section-container" id="protocolinfo-section-container">
  //   <div className="protocolinfo-section">
  //     <TwoColumnSectionContainer
  //       className="protocolinfo-two-column-section"
  //       leftSection={{
  //         title: (
  //           <div className="icon">
  //             <img src={ProtocolInfoImage} alt="protocolinfo" className="protocolinfo-image" />
  //             {/* <div class="info-anime__logos">
  //               <div class="info-anime__logo"><span class="svg-image-binance-logo"></span></div>
  //               <div class="info-anime__logo"><span class="svg-image-swipe-logo"></span></div>
  //               <div class="info-anime__logo"><span class="svg-image-vai-logo"></span></div>
  //             </div> */}
  //             <div className="protocol-logos">
  //               <div className="fuel-wrapper logo-wrapper"><img src={FUELImage} alt="fuel" className="fuel-image img" /></div>
  //               <div className="busd-wrapper logo-wrapper"><img src={BUSDImage} alt="busd" className="busd-image img" /></div>
  //               <div className="fortress-wrapper logo-wrapper"><img src={FortressImage} alt="fortress" className="fortress-image img" /></div>
  //             </div>
  //           </div>
  //         ),
  //       }}
  //       rightSection={{
  //         title: (
  //           <>
  //             <div className="sub-title">Protocol</div>
  //             <div className="title">Money Markets built on Binance Smart Chain</div>
  //           </>
  //         ),
  //         description: (
  //           <>
  //             <div className="description">You can now tokenize your assets utilizing the Binance Smart Chain and receive portable
  //              fTokens that you can freely move around to cold storage, transfer to other users, and more.</div>
  //             <div className="whitepaper-wrapper">
  //               <Button
  //                 // variant="primary"
  //                 className="read-whitepaper-btn yellow-border-btn"
  //                 onClick={() => {
  //                   window.open(`/Whitepaper.pdf`, '_blank');
  //                 }}
  //               >
  //                 Read the white paper
  //                 <IconButton
  //                   className="arrow-button"
  //                   disableTouchRipple
  //                   disableFocusRipple
  //                 >
  //                   <ArrowForwardIcon />
  //                 </IconButton>
  //               </Button>
  //             </div>
  //           </>
  //         ),
  //       }}
  //       widthRatio="1:1"
  //     />
  //   </div>
  // </section>
  <>
  <Background >
  <Container>
    <Title className="title">Collaborations</Title>
    <Text>Lorem Ipsum set qumija iauj</Text>

    <Grid>
    <StyledCard style={{background:cardtheme()}}></StyledCard>
    <StyledCard style={{background:cardtheme()}}></StyledCard>
    <StyledCard style={{background:cardtheme()}}></StyledCard>
    <StyledCard style={{background:cardtheme()}}></StyledCard>
    </Grid>
    <Title className="title">Auditors</Title>
    <Text>Lorem Ipsum set qumija iauj</Text>
    <Grid>
    <StyledCard style={{background:cardtheme()}}></StyledCard>
    <StyledCard style={{background:cardtheme()}}></StyledCard>
    </Grid>
  
  </Container>

  <StyledSection>
        
        <Title2 className="title">STAY IN TOUCH</Title2>
        
        <Text2 className="title">EMAIL SUBSCRIPTION</Text2>
        <Input></Input>
        <Button
          variant="contained"
          className="launchapp-btn"
          // onClick={() => { window.open(`https://bsctestnet.fortress.loans`, '_blank'); }}
        >
          SUBSCRIBE
        </Button>
      
    </StyledSection>
    </Background>
  </>
)};

const Background = styled.div`
background-image: url(${bg2});
background-size: cover;
background-position: center center;
background-repeat: no-repeat;

@media (max-width: 768px) {
  background-image: url(${bg3});
}
`

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
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

  margin: 94px 0 14px 0;

  @media (max-width: 768px) {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 111%;
    /* or 24px */

    text-align: center;
    letter-spacing: -0.02em;
    text-transform: capitalize;

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

const StyledCard = styled.div`
  width: 100%;
  height: 225px;
  background-color: #F3F3F3;
  border-radius: 12px;

  @media (max-width: 768px) {
      width: 100%;
      height: 145px;
    }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const StyledSection = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media (max-width: 768px) {
  height: 100%;
}
`
const Title2 = styled.h3`
font-style: normal;
font-weight: bold;
font-size: 36px;


/* identical to box height, or 40px */

letter-spacing: -0.02em;
text-transform: capitalize;

color: #FFFFFF;

`
const Text2 = styled.p`
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 23px;
/* identical to box height */

text-align: center;
letter-spacing: 0.03em;
text-transform: uppercase;

color: #939393;

`
const Input = styled.input``
const Submit = styled.button``

export default ProtocolInfo;

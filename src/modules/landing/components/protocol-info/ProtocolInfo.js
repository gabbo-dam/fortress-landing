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
import Jetswap from '../../../../assets/logos/jetswap'
import Jetswapfinance from '../../../../assets/logos/jetswapfinance'
import BandProtocol from '../../../../assets/logos/bandprotocol'
import ChainLinkWhite from '../../../../assets/logos/chainlink/chainlink-white'
import ChainLinkDark from '../../../../assets/logos/chainlink/chainlink-dark'
import Hash0x from '../../../../assets/logos/hash0x';
import EtherAuthorityWhite from '../../../../assets/logos/etherauthority/etherauthority-white';
import EtherAuthorityDark from '../../../../assets/logos/etherauthority/etherauthority-dark.png';


const ProtocolInfo = ({ theme }) =>{
  const cardtheme = () => theme === 'dark' ?  '#101010'  : '#F3F3F3';
  const inputtheme = () => theme === 'dark' ?  '#0C0C0C'  : '#F8F8F8';
  const inputbordertheme = () => theme === 'dark' ?  '#272727'  : '#CFCFCF';
  const colortheme = () => theme === 'dark' ?  '#fff'  : '#000';
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
      <Anchor href='/'>
        <StyledCard style={{background:cardtheme()}}>
          <Jetswapfinance fill={colortheme()} />
        </StyledCard>
      </Anchor>
      <Anchor href='/'>
        <StyledCard style={{background:cardtheme()}}>
          <Jetswap fill={colortheme()} />
        </StyledCard>
      </Anchor>
      <Anchor href='/'>
        <StyledCard style={{background:cardtheme()}}>
          <BandProtocol fill={colortheme()}/>
        </StyledCard>
      </Anchor>
      <Anchor href='/'>
        <StyledCard style={{background:cardtheme()}}>
        {theme==='dark' ? <ChainLinkWhite /> : <ChainLinkDark />}      
        </StyledCard>
      </Anchor>
    </Grid>
    <Title className="title">Auditors</Title>
    <Text>Lorem Ipsum set qumija iauj</Text>
    <Grid>
    <Anchor href='/'>
      <StyledCard style={{background:cardtheme()}}>
        {theme==='dark' ? <EtherAuthorityWhite /> : <img src={EtherAuthorityDark} alt='EtherAutority' />}
      </StyledCard>
    </Anchor>
    <Anchor href='/'>
      <StyledCard style={{background:cardtheme()}}>
        <Hash0x fill={colortheme()} />
      </StyledCard>
    </Anchor>
    </Grid>
  
  </Container>

  <StyledSection>
        
        <Title2 className="title">STAY IN TOUCH</Title2>
        
        <Text2 className="title">EMAIL SUBSCRIPTION</Text2>
        <Input style={{background: inputtheme(), borderColor: inputbordertheme()}} placeholder='enter your email address..'></Input>
        <Button
          style={{marginBottom: '87px'}}
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

const Anchor = styled.a`

`


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

const StyledCard = styled.div`
  max-width: 409px;
  width: 100%;
  height: 225px;
  background-color: #F3F3F3;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform .5s;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 2s cubic-bezier(.165, .84, .44, 1);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15);
    content: '';
    opacity: 0;
    z-index: -1;
    border-radius: 12px;
  }

  &:hover,
  &:focus {
    transform: scale3d(1.006, 1.006, 1);

    &::after {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
      max-width: 260px;
      padding 25px;
      width: 100%;
      height: 145px;
      margin: 0 auto;
    }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
  margin: 0 0 14px 0;


  /* identical to box height, or 40px */

  letter-spacing: -0.02em;
  text-transform: capitalize;

  color: #FFFFFF;


  @media (max-width:768px) {
    font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 111%;
/* or 24px */

letter-spacing: -0.02em;
text-transform: capitalize;
margin: 54px 0 19px 0;
  }
`
const Text2 = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  margin: 0 0 37px 0;
  /* identical to box height */

  text-align: center;
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
  margin: 0 0 32px 0
  }
`
const Input = styled.input`
  margin: 0 0 37px 0;
  max-width: 400px;
  width: 100%;
  height: 60px;
  border: 1px solid #272727;
  box-sizing: border-box;
  border-radius: 12px;
  color: #ffffff;
  text-align: center;
  font-size: 18px;

  outline: none;

  ::placeholder {
    color: rgba(147,147,147,0.3);
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.03em;
    text-transform: capitalize;
    margin: 0 0 38px 0;
  }

  @media (max-width: 768px) {
    width: 313px;
  height: 59px;


  background: #0C0C0C;
  border: 1px solid #272727;
  box-sizing: border-box;
  border-radius: 12px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  }
  `
const Submit = styled.button``

export default ProtocolInfo;

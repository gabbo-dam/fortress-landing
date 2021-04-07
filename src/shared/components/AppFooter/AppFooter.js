import React from 'react';
import styled from 'styled-components';

import AppHeader from '../AppHeader/AppHeader';
import MediumIcon from '../../../assets/icons/medium.svg';
import TelegramIcon from '../../../assets/icons/telegram.svg';
import TwitterIcon from '../../../assets/icons/twitter.svg';
import GithubIcon from '../../../assets/icons/github.svg';
import LogoFooter from '../../../assets/logos/fortressfooter'
import Twitter from '../../../assets/logos/social/twitter'
import Instagram from '../../../assets/logos/social/instagram'
import Telegram from '../../../assets/logos/social/telegram'
import Github from '../../../assets/logos/social/github'
import Discord from '../../../assets/logos/social/discord'

const socialLinks = [
  {
    icon: MediumIcon,
    link: 'https://jetfuelfinance.medium.com',
  },
  {
    icon: TelegramIcon,
    link: 'https://t.me/jetfuelfinance',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/Jetfuelfinance',
  },
  {
    icon: GithubIcon,
    link: 'https://github.com/jetfuelfinance',
  },
];

const AppFooter = ({theme}) => {
  const colortheme = () => theme === 'dark' ?  '#fff'  : '#000';
  return(
    <div className="footer">
      {/* <AppHeader isFooter /> */}
      <Flex2>
        <Logo>
          <LogoFooter fill={colortheme()} />
        </Logo>
        <SocialMediaIconMobile>
          <Twitter fill={colortheme()}/> 
          <Instagram fill={colortheme()}/> 
          <Telegram fill={colortheme()}/> 
          <Github fill={colortheme()}/> 
          
        </SocialMediaIconMobile>
        <Grid style={{color: colortheme()}}>
          
          <Anchor>Aave Protocol</Anchor>
          <Anchor>Careers</Anchor>
          <Anchor>Privacy Policy</Anchor>
          <Anchor>Developers</Anchor>
          <Anchor>Branding</Anchor>
          <Anchor>Cookie Policy</Anchor>
          <Anchor>Security</Anchor>
          <Anchor>Whitepaper</Anchor>
          <Anchor>Blog</Anchor>
          <Anchor>ATokens</Anchor>
          <Anchor>Aavenomics</Anchor>
          <Anchor>Contact</Anchor>
          <Anchor>Ecosystem</Anchor>
          <Anchor>Terms of Use</Anchor>
        </Grid> 
      </Flex2>
      <Divider />
      
      <Flex>
      <Copy className="licence-details">
            © 2021 Developed by Jetfuel Finance Dev Team
      </Copy>
        <SocialMediaIcon>
          <Twitter fill={colortheme()}/> 
          <Instagram fill={colortheme()}/> 
          <Telegram fill={colortheme()}/> 
          <Github fill={colortheme()}/> 
          
        </SocialMediaIcon>
        {/* <SocialMedia style={{color: colortheme()}}>
        <Block>    
          <Twitter style={{margin:'0 0 -5px 0' }} fill={colortheme()}/> <Social>Twitter</Social> <br />
        </Block>
        <Block>
          <Instagram style={{margin:'0 0 -5px 0' }} fill={colortheme()}/> <Social>Instagram</Social> <br />
        </Block>
        <Block>
          <Telegram style={{margin:'0 0 -5px 0' }} fill={colortheme()}/> <Social>Telegram</Social> <br />
        </Block>
        <Block>
          <Github style={{margin:'0 0 -5px 0' }} fill={colortheme()}/> <Social>Github</Social> <br />
        </Block>
        <Block>
          <Discord fill={colortheme()}/> <Social>Discord</Social> <br />
        </Block>
        </SocialMedia> */}
        
        
        </Flex>
      {/* <div className="app-details">
        
        <div className="social-links">
          {
            socialLinks.map(socialLink => (
              <img
                src={socialLink.icon}
                alt="Stablecoin"
                className="social-links-image"
                onClick={() => {
                  window.open(`${socialLink.link}`, '_blank');
                }}
              />
            ))
          }
        </div>
      </div> */}
    </div>
  )};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);  
  width: 70%;
  height: 200px;
  margin-right: -60px;
  // grid-auto-flow: column;

  @media (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    grid-auto-flow: row;
    margin: 0 auto;
    width: auto;
    height:auto;
    text-align: center;
  }
`

const Anchor = styled.a`
width: 150px;
@media (max-width: 768px){
  height: 50px;
}
`

const Block = styled.div`
margin: 0 0 32px 0;
`
const Logo = styled.div`
@media (max-width: 768px){
  margin: 0 auto;
}
`

const Flex = styled.div`
display: flex;
margin: 35px 0 0 0 ;
justify-content: space-between;

@media (max-width: 768px){
  flex-direction: column;
}

`
const Copy = styled.div`
color: #939393;
diplay:block;

@media (max-width: 768px){
  display:none;
}
`
const Flex2 = styled.div`
display: flex;
justify-content: space-between;

@media (max-width: 768px){
  display: flex;
  justify-content: center;
  
  flex-direction: column;
}
`
const SocialMedia = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, 1fr);  
  width: 20%;
  grid-auto-flow: column;
  

  @media (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;  
    grid-auto-flow: row;
    display: none;
  }
`
const Social = styled.p`
display: inline-block;
margin: 0 0 0 20px;
`
const SocialMediaIcon = styled.div`
  display: flex;
  justify-content: space-around;
  width: 15%;

  @media (max-width: 768px){

    display: none;
    justify-content: space-around;
    margin: 0 0 50px 0;
  }
`
const SocialMediaIconMobile = styled.div`
  display: none;


  @media (max-width: 768px){
    width: 80%;
    display: flex;
    justify-content: space-around;
    margin: 40px auto;
    
  }
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(52, 52, 52, 0.6);  
  margin: 40px 0 0 0 ;
`

export default AppFooter;
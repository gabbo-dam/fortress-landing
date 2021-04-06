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
        <LogoFooter fill={colortheme()} />
        <SocialMediaIcon>
          <Anchor><Twitter fill={colortheme()}/> </Anchor>
          <Anchor><Instagram fill={colortheme()}/> </Anchor>
          <Anchor><Telegram fill={colortheme()}/> </Anchor>
          <Anchor><Github fill={colortheme()}/> </Anchor>
          <Anchor><Discord fill={colortheme()}/> </Anchor>
        </SocialMediaIcon>
      </Flex2>
      <Divider />
      <Flex>
        
        {/* <SocialMedia style={{color: colortheme()}}>
        <Block>    
          <Anchor><Twitter style={{margin:'0 0 -5px 0' }} fill={colortheme()}/> <Social>Twitter</Social></Anchor> <br />
        </Block>
        <Block>
          <Anchor><Instagram style={{margin:'0 0 -5px 0' }} fill={colortheme()}/> <Social>Instagram</Social></Anchor> <br />
        </Block>
        <Block>
          <Anchor><Telegram style={{margin:'0 0 -5px 0' }} fill={colortheme()}/> <Social>Telegram</Social></Anchor> <br />
        </Block>
        <Block>
          <Anchor><Github style={{margin:'0 0 -5px 0' }} fill={colortheme()}/> <Social>Github</Social></Anchor> <br />
        </Block>
        <Block>
          <Discord fill={colortheme()}/> <Social>Discord</Social> <br />
        </Block>
        </SocialMedia> */}
        <Grid style={{color: colortheme()}}>
        <Text><Anchor>Aave Protocol</Anchor></Text>
        <Text><Anchor>Careers</Anchor></Text>
        <Text><Anchor>Audits and Security</Anchor></Text>
        <Text><Anchor>Privacy Policy</Anchor></Text>
        <Text><Anchor>Developers</Anchor></Text>
        <Text><Anchor>Branding</Anchor></Text>
        <Text><Anchor>Cookie Policy</Anchor></Text>
        <Text><Anchor>Security</Anchor></Text>
        <Text><Anchor>Whitepaper</Anchor></Text>
        <Text><Anchor>Blog</Anchor></Text>
        <Text><Anchor>ATokens</Anchor></Text>
        <Text><Anchor>Aavenomics</Anchor></Text>
        <Text><Anchor>Contact</Anchor></Text>
        <Text><Anchor>Ecosystem</Anchor></Text>
        <Text><Anchor>Terms of Use</Anchor></Text>
        </Grid>
        <Copy className="licence-details">
          Copyright © 2021 FORTRESS
        </Copy>
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
  height: 275px;
  margin: 0 auto;

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

cursor: pointer;

`

const Text = styled.p`
width: 150px;
margin: 0;
@media (max-width: 768px){
  height: 50px;
}
`

const Block = styled.div`
margin: 0 0 32px 0;
`

const Flex = styled.div`
display: flex;
margin: 35px 0 0 0 ;

@media (max-width: 768px){
  flex-direction: column;
}

`
const Copy = styled.div`
color: #939393;
display:flex;
align-items: flex-end;
margin: 0 0 0 50px;

@media (max-width: 768px){
  display:none;
}
`
const Flex2 = styled.div`
display: flex;
justify-content: space-between;

@media (max-width: 768px){
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: 20%;
  

  @media (max-width: 768px){

    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 50px 0 0 0;
  }
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(52, 52, 52, 0.6);  
  margin: 40px 0 0 0 ;
  @media (max-width: 768px){

    margin: 20px 0 0 0 ;
  }
`

export default AppFooter;

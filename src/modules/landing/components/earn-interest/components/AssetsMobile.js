import React from 'react'
import styled from 'styled-components'

import Eth from '../../../../../assets/logos/eth/eth.svg'
import arrow from '../../../../../assets/logos/arrow/arrow-right.svg'

const Assets = ({ theme }) =>{
    const colortheme = () => theme === 'dark' ?  '#fff'  : '#000';
    return(
      <>
        
        <MobileTable>
          
          <TableFlex3>
            <Asset style={{color: colortheme()}}><StyledEth src={Eth} alt='eth'/>ETH</Asset>
            <SupplyAPY style={{color: colortheme()}}>🠕 0.97%</SupplyAPY>
            <BorrowAPY style={{color: colortheme()}}>4.21%</BorrowAPY>
          </TableFlex3>
        </MobileTable>
        </>
    )
}

const MobileTable = styled.div`
  
`

const TableFlex2 = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
justify-content: space-between;
align-items: center;
width: 100%;
text-align: center;

@media (max-width:768px){
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  margin: 0 auto;
  
  border-radius: 13px;
  justify-content: space-around;
}
`
const TableFlex3 = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
justify-content: space-between;
align-items: center;
width: 100%;
text-align: center;

@media (max-width:768px){
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  margin: 0 auto 15px auto;
  border: 1px solid  #242424; 
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

const TableFlex = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
justify-content: space-between;
align-items: center;
text-align: center;

border: 1px solid  #242424;
border-radius: 13px;
margin-bottom: 15px;

&:hover{

  border: 1px solid  rgba(247, 196, 8, 0.3) !important;
}

@media (max-width:768px){
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  
  justify-content: space-around;
}
`
const StyledEth = styled.img`
margin: 0 10px -5px 0;

@media (max-width: 768px){
    width: 15px;
    margin: 0 10px -5px -15px;
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
const Supplied = styled.p`
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
const Borrowed = styled.p`
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
const BorrowAPY = styled.p`
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
const GoToMarket = styled.a`
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 111%;
/* identical to box height, or 27px */

letter-spacing: -0.02em;
text-transform: capitalize;
cursor: pointer;


  &:hover{
    color: #F7C408 !important;
  }

  @media (max-width:768px){
  display: none;
  

  }
`

export default Assets
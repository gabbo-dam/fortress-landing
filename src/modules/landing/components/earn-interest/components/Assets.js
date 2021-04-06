import React from 'react'
import styled from 'styled-components'

import Eth from '../../../../../assets/logos/eth/eth.svg'
import arrow from '../../../../../assets/logos/arrow/arrow-right.svg'

const Assets = ({ theme }) =>{
    const colortheme = () => theme === 'dark' ?  '#fff'  : '#000';
    return(
        <TableFlex> 
          <Asset style={{color: colortheme()}}><StyledEth src={Eth} alt='eth'/>ETH</Asset>
          <Supplied style={{color: colortheme()}}>$1.06M</Supplied>
          <Borrowed style={{color: colortheme()}}>$1.06M</Borrowed>
          <SupplyAPY style={{color: colortheme()}}>🠕 0.97%</SupplyAPY>
          <BorrowAPR style={{color: colortheme()}}>4.21%</BorrowAPR>
          <GoToMarket style={{color: colortheme()}}>GO TO MARKET ➙ </GoToMarket>
        </TableFlex>
    )
}

const TableFlex = styled.div`
display: flex;
justify-content: space-between;
align-items: center;


@media (max-width:768px){
  flex-direction: row;
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
font-size: 10px;
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
font-size: 10px;
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
font-size: 10px;
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
font-size: 10px;
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
font-size: 10px;
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
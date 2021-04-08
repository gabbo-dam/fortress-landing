import React, { useState } from "react";
import styled from "styled-components";
import ArrowDown from "../../../../../assets/logos/arrow";
import { TokenIconData } from "../TokenData";
import BigNumber from "bignumber.js";
import {
  currencyFormatter,
  percentFormatter,
} from "../../../../../utils/helper";

const Assets = ({ theme, token, withFTS }) => {
  const colortheme = () => (theme === "dark" ? "#fff" : "#000");
  const [tab, setTab] = useState(false);
  return (
    <>
      <MobileTable>
        <TableFlex3>
          <Asset style={{ color: colortheme() }}>
            <StyledEth
              src={TokenIconData[token.underlyingSymbol]}
              alt={token.underlyingName}
            />
            {token.underlyingSymbol}
          </Asset>
          <SupplyAPY style={{ color: colortheme() }}>
            {percentFormatter(
              new BigNumber(token.supplyApy).plus(
                withFTS
                  ? new BigNumber(token.supplyFortressApy)
                  : new BigNumber(0)
              )
            )}
            %
          </SupplyAPY>
          <BorrowAPY style={{ color: colortheme() }}>
            {percentFormatter(
              new BigNumber(token.borrowApy).plus(
                withFTS
                  ? new BigNumber(token.borrowFortressApy)
                  : new BigNumber(0)
              )
            )}
            %
          </BorrowAPY>
          <StyledArrow onClick={() => setTab(!tab)}>
            <ArrowDown colortheme={colortheme()}></ArrowDown>
          </StyledArrow>
          {tab === true && (
            <>
              <TableTitle style={{ color: colortheme() }}>Supplied</TableTitle>
              <TableTitle style={{ color: colortheme() }}>Borrowed</TableTitle>
              <GoToMarket
                style={{ color: colortheme() }}
                href={`https://bsctestnet.fortress.loans/market/${token.underlyingSymbol}`}
              >
                GO TO MARKET
              </GoToMarket>
              <Supplied style={{ color: colortheme() }}>
                {currencyFormatter(token.totalSupplyUsd)}
              </Supplied>
              <Borrowed style={{ color: colortheme() }}>
                {currencyFormatter(token.totalBorrowsUsd)}
              </Borrowed>
            </>
          )}
        </TableFlex3>
      </MobileTable>
    </>
  );
};

const MobileTable = styled.div``;

const StyledArrow = styled.div`
  margin-left: 0px;
`;
const TableFlex3 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr) 15%;
    width: 80%;
    margin: 0 auto 15px auto;
    border: 1px solid #242424;
    border-radius: 13px;
    justify-content: space-around;
  }
`;

const TableTitle = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 111%;

  /* identical to box height, or 27px */

  letter-spacing: -0.02em;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 111%;
    /* or 14px */

    letter-spacing: -0.02em;
    text-transform: capitalize;

    color: #000000;
  }
`;

const StyledEth = styled.img`
  margin: 0 10px -5px 0;

  @media (max-width: 768px) {
    width: 15px;
    margin: 0 10px -3px -15px;
  }
`;
const Asset = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 111%;
  /* identical to box height, or 27px */

  letter-spacing: -0.02em;
  text-transform: capitalize;

  color: #ffffff;

  @media (max-width: 768px) {
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
`;
const Supplied = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 111%;
  /* identical to box height, or 27px */

  letter-spacing: -0.02em;
  text-transform: capitalize;

  color: #ffffff;
  @media (max-width: 768px) {
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
`;
const Borrowed = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 111%;
  /* identical to box height, or 27px */

  letter-spacing: -0.02em;
  text-transform: capitalize;

  color: #ffffff;
  @media (max-width: 768px) {
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
`;
const SupplyAPY = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 111%;
  /* identical to box height, or 27px */

  letter-spacing: -0.02em;
  text-transform: capitalize;

  color: #ffffff;
  @media (max-width: 768px) {
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
`;
const BorrowAPY = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 111%;
  /* identical to box height, or 27px */

  letter-spacing: -0.02em;
  text-transform: capitalize;

  color: #ffffff;
  @media (max-width: 768px) {
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
`;
const GoToMarket = styled.a`
  color: #f7c408 !important;

  @media (max-width: 768px) {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;

    grid-column: 3/5;
    grid-row: 2/4;

    &:hover {
      color: #f7c408 !important;
    }
  }
`;

export default Assets;

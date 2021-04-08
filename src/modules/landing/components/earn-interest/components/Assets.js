import React from "react";
import styled from "styled-components";
import BigNumber from "bignumber.js";
import { TokenIconData } from "../TokenData";
import {
  currencyFormatter,
  percentFormatter,
} from "../../../../../utils/helper";

const Assets = ({ theme, token, withFTS }) => {
  const colortheme = () => (theme === "dark" ? "#fff" : "#000");
  var bordertheme = () => (theme === "dark" ? "rgba(52,52,52,0.6)" : "#E7E7E7");

  return (
    <>
      <TableFlex
        bordertheme={bordertheme()}
        style={{ border: `1px solid ${bordertheme()}` }}
      >
        <Asset style={{ color: colortheme() }}>
          <StyledEth
            src={TokenIconData[token.underlyingSymbol]}
            alt={token.underlyingName}
          />
          {token.underlyingSymbol}
        </Asset>
        <Supplied style={{ color: colortheme() }}>
          {currencyFormatter(token.totalSupplyUsd)}
        </Supplied>
        <Borrowed style={{ color: colortheme() }}>
          {currencyFormatter(token.totalBorrowsUsd)}
        </Borrowed>
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
        <GoToMarket
          style={{ color: colortheme() }}
          href={`https://bsctestnet.fortress.loans/market/${token.underlyingSymbol}`}
        >
          GO TO MARKET ➙{" "}
        </GoToMarket>
      </TableFlex>
    </>
  );
};

const TableFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border: 1px solid #e7e7e7;
  border-radius: 13px;
  margin-bottom: 15px;

  &:hover {
    border: 1px solid rgba(247, 196, 8, 0.3) !important;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    width: 100%;

    justify-content: space-around;
  }
`;
const StyledEth = styled.img`
  margin: 0 10px -5px 0;
  width: 25px;

  @media (max-width: 768px) {
    width: 15px;
    margin: 0 10px -5px -15px;
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
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 111%;
  /* identical to box height, or 27px */

  letter-spacing: -0.02em;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    color: #f7c408 !important;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Assets;

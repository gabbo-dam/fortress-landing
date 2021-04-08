import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CountUp from "react-countup";
import BigNumber from "bignumber.js";
import DecentralizedVectorIcon from "../../../../assets/icons/decentralized-vector.svg";
import BEP20VectorIcon from "../../../../assets/icons/bep20-vector.svg";
import ScalableVectorIcon from "../../../../assets/icons/scalable-vector.svg";
import { Button } from "@material-ui/core";

const MoneyMarketsSection = ({ tokenData }) => {
  const [tvl, setTvl] = useState(0);
  useEffect(() => {
    if (tokenData && tokenData.markets) {
      let temp = new BigNumber(0);
      tokenData.markets.forEach((item) => {
        temp = new BigNumber(item.totalSupplyUsd).plus(temp);
      });
      setTvl(temp.toNumber());
    }
  }, [tokenData]);

  return (
    <section className="moneymarket-section-container">
      <div className="moneymarket-section">
        <StyledHero>
          <Title className="title">Fortress Total Protocol Value</Title>
          <Number>
            <CountUp
              start={0}
              end={tvl}
              duration={1}
              separator=","
              decimals={2}
              decimal="."
              prefix="$"
            />
          </Number>
          <Text className="title">
            A Decentralized Marketplace for{" "}
            <StyledText>Lenders and Borrowers</StyledText> with Borderless
            Stablecoins.
          </Text>
          <Button
            variant="contained"
            className="launchapp-btn"
            onClick={() => {
              window.open(`https://bsctestnet.fortress.loans`, "_self");
            }}
          >
            Enter App
          </Button>
        </StyledHero>
      </div>
    </section>
  );
};

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
`;
const Number = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 102px;
  /* identical to box height */
  margin: 0;
  text-align: center;
  text-transform: capitalize;

  color: #f7c408;

  @media (max-width: 768px) {
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 51px;
    /* identical to box height */

    margin: 0;

    text-align: center;
    text-transform: capitalize;

    color: #f7c408;
  }
`;
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
`;
const StyledText = styled.span`
  font-weight: bold;
`;

const StyledHero = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const mapStateToProps = (state) => ({
  tokenData: state.landing.tokenData,
});

export default connect(mapStateToProps, null)(MoneyMarketsSection);

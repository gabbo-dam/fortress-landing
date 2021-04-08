import React, { useRef } from "react";
import styled from "styled-components";
import { FormControlLabel } from "@material-ui/core";
import { connect } from "react-redux";
import IOSSwitch from "../../../../shared/components/IOSSwitch";
import Assets from "./components/Assets";
import AssetsMobile from "./components/AssetsMobile";

const EarnIntereset = ({ withFTS, onWithFTSChange, theme, tokenData }) => {
  const myRef = useRef(null);
  const colortheme = () => (theme === "dark" ? "#fff" : "#000");
  return (
    <>
      <Container>
        <Flex>
          <Container1>
            <Title style={{ color: colortheme() }}>Assets</Title>
            <Text>Supply and borrow up to 11 assets to begin earning FTS</Text>
          </Container1>
          <Container2>
            <div style={{ display: "flex" }} className="with-fts">
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
                  root: "with-fts-form-label",
                }}
              />
              <div
                style={{ display: "flex", alignItems: "center" }}
                className={`with-fts-label ${withFTS ? "active" : "inactive"}`}
              >
                <div className="lit">🔥&nbsp;</div>
                <div style={{ color: colortheme() }} className="fai">
                  {withFTS ? "with" : "without"} FTS
                </div>
              </div>
            </div>
          </Container2>
        </Flex>
      </Container>
      <Table>
        <Mobile>
          <TableFlex2>
            <TableTitle style={{ color: colortheme() }}>Assets</TableTitle>
            <TableTitle style={{ color: colortheme() }}>Supply APY</TableTitle>
            <TableTitle style={{ color: colortheme() }}>Borrow APY</TableTitle>
          </TableFlex2>
          {tokenData &&
            tokenData.markets &&
            tokenData.markets.map((token, index) => (
              <AssetsMobile
                theme={theme}
                token={token}
                withFTS={withFTS}
                key={index}
              />
            ))}
        </Mobile>
        <DeskTop>
          <TableFlex>
            <TableTitle style={{ color: colortheme() }}>Assets</TableTitle>
            <TableTitle style={{ color: colortheme() }}>Supplied</TableTitle>
            <TableTitle style={{ color: colortheme() }}>Borrowed</TableTitle>
            <TableTitle style={{ color: colortheme() }}>Supply APY</TableTitle>
            <TableTitle style={{ color: colortheme() }}>Borrow APY</TableTitle>
          </TableFlex>
          {tokenData &&
            tokenData.markets &&
            tokenData.markets.map((token, index) => (
              <Assets
                theme={theme}
                token={token}
                withFTS={withFTS}
                key={index}
              />
            ))}
        </DeskTop>
      </Table>
    </>
  );
};

const mapStateToProps = (state) => ({
  theme: state.landing.theme,
  tokenData: state.landing.tokenData,
});

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const DeskTop = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Mobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Container1 = styled.div``;
const Container2 = styled.div``;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const TableFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    width: 100%;

    justify-content: space-around;
  }
`;

const TableFlex2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr) 15%;
    width: 80%;
    margin: 0 auto;

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
const Table = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 111%;
  /* identical to box height, or 40px */

  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: #ffffff;

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
    margin: 56px 0 12px 0;
    color: #ffffff;
  }
`;
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
`;

export default connect(mapStateToProps)(EarnIntereset);

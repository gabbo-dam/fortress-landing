import React from 'react';
import './Market.scss';
import bep20Img from '../../assets/Images/bep20.png';
import chainImg from '../../assets/Images/chain.png';
import featureImg from '../../assets/Images/feature.png';

const Market = () => (
  <div className="market-wrapper">
    <div className="width-container">
      <div className="market-title">Market Info</div>
      <div className="market-items">
        <div className="market-item">
          <div className="market-item-title">BEP-20</div>
          <div className="market-item-body">$8,936,192.56</div>
        </div>
        <div className="market-item">
          <div className="market-item-title">Number of Suppliers</div>
          <div className="market-item-body">465</div>
        </div>
        <div className="market-item">
          <div className="market-item-title">Total Borrowed</div>
          <div className="market-item-body">$644,219.21</div>
        </div>
        <div className="market-item">
          <div className="market-item-title">Number of Borrowers</div>
          <div className="market-item-body">111</div>
        </div>
        <div className="market-item">
          <div className="market-item-title">Token Address</div>
          <div className="market-item-body">0x2ff3...b6d0</div>
        </div>
      </div>
    </div>
  </div>
);

Market.propTypes = {};

export default Market;

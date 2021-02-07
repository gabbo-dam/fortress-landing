import React from 'react';
import './Coins.scss';
import bnbImg from '../../assets/Coins/bnb.png';
import ethImg from '../../assets/Coins/eth.png';
import usdtImg from '../../assets/Coins/usdt.png';

const Coins = () => (
  <div className="coins-wrapper">
    <div className="width-container">
      <div className="coins-title">Coins</div>
      <div className="coins-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames sapien sem nisl integer. Aliquam laoreet cras hendrerit augue diam neque, vulputate nulla. Metus volutpat nullam nunc, orci consequat.
      </div>
      <div className="coins-item-list">
        <div className="coins-item">
          <img src={bnbImg} alt="" />
        </div>
        <div className="coins-item">
          <img src={ethImg} alt="" />
        </div>
        <div className="coins-item">
          <img src={usdtImg} alt="" />
        </div>
        <div className="coins-item">
          <img src={bnbImg} alt="" />
        </div>
        <div className="coins-item">
          <img src={ethImg} alt="" />
        </div>
        <div className="coins-item">
          <img src={usdtImg} alt="" />
        </div>
        <div className="coins-item">
          <img src={bnbImg} alt="" />
        </div>
        <div className="coins-item">
          <img src={ethImg} alt="" />
        </div>
        <div className="coins-item">
          <img src={usdtImg} alt="" />
        </div>
      </div>
      <div className="coins-sft">
        <div className="coins-sft-text">
          <div className="coins-sft-title">SFT</div>
          <div className="coins-sft-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>
        <div className="coins-form">
          <div className="coins-info">
            <div className="info-name">
              <div className="info-name-label">Token Name:</div>
              <div className="info-name-value">BEP-20</div>
            </div>
            <div className="info-price">
              Price <span>$1.64</span>
            </div>
          </div>
          <div className="coins-form-value">
            <div className="coins-form-header">
              <div className="title">Savings</div>
              <div className="title">Borrow</div>
            </div>
            <div className="coins-form-body">
              <div className="apy">APY - <span>9.63%</span></div>
              <div className="apy-line" />
              <div className="apy">APY - <span>9.63%</span></div>
            </div>
            <div className="coins-form-btn">
              <div
                className="button medium"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                Go to info source
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Coins.propTypes = {};

export default Coins;

import React from 'react';
import {
  Avatar,
  FormControl,
  InputLabel,
  ListItemIcon,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from 'react-redux';

import RectangleYellowVector from '../../../../assets/icons/rectangle-yellow-vector.svg';
import TurboFanImage from '../../../../assets/icons/turbofan.png';
import DotDotImage from '../../../../assets/icons/dot-dot.svg';
import FUELImage from '../../../../assets/icons/fuel.svg';
import { useOutlineSelectStyles } from '@mui-treasury/styles/select/outline';

import { TokenIconData } from '../earn-interest/TokenData';
import {
  addComma,
  numbersAfterDecimal,
  startAndEnd,
} from '../../../../utils/helper';
import { Link } from 'react-router-dom';

const MarketInfo = ({
  tokenData,
  selectedToken,
  hanldeSelectedToken,
  selectedTokenDetails,
  theme,
}) => {
  const outlineSelectClasses = useOutlineSelectStyles();
  const menuProps = {
    classes: {
      paper: `paper-list  ${theme}`,
      list: `select-list ${theme}`,
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
    getContentAnchorEl: null,
  };

  return (
    // <div className="market-stats-info-wrapper" id="market-stats-info-wrapper">
    //   <div className="turbo_img_vector">
    //     <img src={TurboFanImage} alt="turbo" className="turbo" />
    //   </div>
    //   <div className="market-stats-info-content">
    //     <div className="img_vector">
    //       <img
    //         src={RectangleYellowVector}
    //         alt="rectangle vector"
    //         className="rectangle"
    //       />
    //     </div>
    //     <div className="dot_img_vector">
    //       <img src={DotDotImage} alt="dot dot" className="dot-dot" />
    //     </div>
    //     <h2 className="title">Marketinfo</h2>
    //     <div className="market-stats-info">
    //       <div className="token-select-price">
    //         <FormControl
    //           color="#fff"
    //           variant="outlined"
    //           classes={{ root: 'token-price-dropdown' }}
    //         >
    //           <Select
    //             onChange={(e) => hanldeSelectedToken(e)}
    //             defaultValue={selectedToken}
    //             IconComponent={ExpandMoreIcon}
    //             classes={{
    //               root: outlineSelectClasses.select,
    //               icon: 'expand-more-icon',
    //             }}
    //             MenuProps={menuProps}
    //             // className="marketinfo-select-token"
    //             // classes={{
    //             //   root: 'marketinfo-select-token',
    //             //   icon: 'expand-more-icon',
    //             // }}
    //           >
    //             {tokenData.map((token) => (
    //               <MenuItem
    //                 value={token.underlyingSymbol}
    //                 className="selected-token"
    //               >
    //                 <ListItemIcon>
    //                   <Avatar
    //                     fontSize="small"
    //                     src={TokenIconData[token.underlyingSymbol]}
    //                     alt="coin"
    //                   />
    //                 </ListItemIcon>
    //                 <Typography variant="inherit" className="token-symbol">
    //                   {token.underlyingSymbol}
    //                 </Typography>
    //               </MenuItem>
    //             ))}
    //           </Select>
    //         </FormControl>
    //         <div className="token-price">
    //           <div className="price-label">Price</div>
    //           <div className="token-price">
    //             $
    //             {numbersAfterDecimal(
    //               selectedTokenDetails && selectedTokenDetails.tokenPrice,
    //               2
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //       <div className="token-details">
    //         <div className="total-supply">
    //           <div className="label">Total Supply</div>
    //           <div className="value">
    //             $
    //             {addComma(
    //               numbersAfterDecimal(
    //                 selectedTokenDetails && selectedTokenDetails.totalSupplyUsd,
    //                 2
    //               )
    //             )}
    //           </div>
    //         </div>
    //         <div className="no-of-suppliers">
    //           <div className="label">Number of Suppliers</div>
    //           <div className="value">
    //             {(selectedTokenDetails && selectedTokenDetails.supplierCount) ||
    //               0}
    //           </div>
    //         </div>
    //         <div className="total-borrowed">
    //           <div className="label">Total Borrowed</div>
    //           <div className="value">
    //             $
    //             {addComma(
    //               numbersAfterDecimal(
    //                 selectedTokenDetails &&
    //                   selectedTokenDetails.totalBorrowsUsd,
    //                 2
    //               )
    //             )}
    //           </div>
    //         </div>
    //         <div className="Number of Borrowers">
    //           <div className="label">Number of Borrowers</div>
    //           <div className="value">
    //             {(selectedTokenDetails && selectedTokenDetails.borrowerCount) ||
    //               0}
    //           </div>
    //         </div>
    //         <div className="token-address">
    //           <div className="label">Token Address</div>
    //           {/* <Link to={`https://bscscan.com/token/${selectedTokenDetails && selectedTokenDetails.address}`} target={"_blank"}> */}
    //           <a
    //             rel="noopener noreferrer"
    //             href={`https://bscscan.com/token/${
    //               selectedTokenDetails && selectedTokenDetails.address
    //             }`}
    //             target="_blank"
    //           >
    //             <div className="token-address-value value">
    //               {selectedTokenDetails &&
    //                 startAndEnd(selectedTokenDetails.address)}
    //             </div>
    //           </a>
    //           {/* </Link> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div> 
    // </div>
    <>
    </>
  );
};

const mapStateToProps = (state) => ({
  theme: state.landing.theme,
});

export default connect(mapStateToProps)(MarketInfo);

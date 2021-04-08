import { showNotification } from "./Notifications";
import BigNumber from "bignumber.js";
const commaNumber = require("comma-number");

const format = commaNumber.bindWith(",", ".");

export const splitString = (string, symbol) => {
  return string.split(symbol);
};

export const showErrorNotification = (message) => {
  showNotification(message, "error", 5000);
};

export const urlSearchParams = (name, url) => {
  const results = new RegExp(`[?&]${name}=([^&#]*)`).exec(url);
  return results && results.length > 0 && decodeURI(results[1]);
};

export const numbersAfterDecimal = (number, decimal) => {
  return number ? Number(number).toFixed(decimal || 2) : 0;
};

export const startAndEnd = (str, startCharacterCount, endCharacterCount) => {
  return (
    (str &&
      str.substr(0, 5) + "..." + str.substr(str.length - 4, str.length)) ||
    ""
  );
};

export const addComma = (str, number) => {
  return str && str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const currencyFormatter = (labelValue) => {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? `$${format(
        new BigNumber(`${Math.abs(Number(labelValue)) / 1.0e9}`).dp(2, 1)
      )}B`
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? `$${format(
        new BigNumber(`${Math.abs(Number(labelValue)) / 1.0e6}`).dp(2, 1)
      )}M`
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? `$${format(
        new BigNumber(`${Math.abs(Number(labelValue)) / 1.0e3}`).dp(2, 1)
      )}K`
    : `$${format(new BigNumber(`${Math.abs(Number(labelValue))}`).dp(2, 1))}`;
};

export const percentFormatter = (value) => {
  if (value.isZero()) {
    return 0;
  } else if (value.isLessThan(0.01)) {
    return 0.01;
  } else if (value.gt(1e8)) {
    const length = value.dp(0).toString(10).split(".")[0].length;
    return value
      .div(Math.pow(10, length - 1))
      .dp(2, 1)
      .times(Math.pow(10, length - 1))
      .toNumber();
  }
  return value.dp(2, 1).toNumber();
};

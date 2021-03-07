import { showNotification } from "./Notifications";

export const splitString = (string, symbol) => {
  return string.split(symbol);
}

export const showErrorNotification = (message) => {
  showNotification(message, 'error', 5000);
}

export const urlSearchParams = (name, url) => {
  const results = new RegExp(`[?&]${name}=([^&#]*)`).exec(url);
  return results && results.length > 0 && decodeURI(results[1]);
};

export const numbersAfterDecimal = (number, decimal) => {
  return number ? Number(number).toFixed(decimal || 2) : 0;
}

export const startAndEnd = (str, startCharacterCount, endCharacterCount) => {
  return (str && str.substr(0, 5) + '...' + str.substr(str.length-4, str.length)) || '';
}

export const addComma = (str, number) => {
  return str && str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

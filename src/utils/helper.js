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

export const setDocHeight = () => {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
};

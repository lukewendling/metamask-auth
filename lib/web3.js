import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // use MetaMask or other injected provider.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // TODO: if we want accounts on page load.
  const provider = new Web3.providers.HttpProvider('');
  web3 = new Web3();
}

export default web3;

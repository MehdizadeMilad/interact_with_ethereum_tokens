const Web3 = require('web3');
var web3 = new Web3(process.env.ETHEREUM_GATEWAY);

const ERC20_minABI = require('./abi');
const LSSContract = new web3.eth.Contract(ERC20_minABI, process.env.LSS_TOKEN_CONTRACT_ADDRESS);

async function getBalance(walletAddress) {
    balance = await LSSContract.methods.balanceOf(walletAddress).call();
    return Web3.utils.fromWei(balance);
}

function getSignerAddress(message, signature) {
    return web3.eth.accounts.recover(message, signature);
}

module.exports = {
    getBalance,
    getSignerAddress,
}
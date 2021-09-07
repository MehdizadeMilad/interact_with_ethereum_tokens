const { getBalance, getSignerAddress } = require('../web3').Helpers;

module.exports = {
    async getBalanceOfLSSToken(walletAddress) {

        //TODO Business logics
        return await getBalance(walletAddress);
    },
    async authorize(message, walletAddress, signature) {
        
        //TODO Business logics
        return getSignerAddress(message, signature) === walletAddress;
    }
}
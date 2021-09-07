const { getBalanceOfLSSToken, authorize } = require('../business');

module.exports = {
    test: () => "Hello",
    balance: async ({ walletAddress }) => {

        let balance = null;
        try {

            balance = await getBalanceOfLSSToken(walletAddress);

        } catch (error) {
            console.error(error);
        }

        return balance;
    },
    authorize: async ({ message, walletAddress, signature }) => {

        let isTrue = null;
        try {

            isTrue = await authorize(message, walletAddress, signature);

        } catch (error) {
            console.error(error);
        }

        return isTrue;
    },
}
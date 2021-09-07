const web3 = new Web3();

function signMessage(message, privateKey) {

    const operationResult = {
        issucceeded: false,
        signature: null,
        message: null
    };

    try {

        if (!message || !privateKey)  // TODO an accurate validation is needed
            throw new Error("Validation Error");

        const sign = web3.eth.accounts.sign(message, privateKey);

        if (sign && sign.signature) {
            operationResult.issucceeded = true;
            operationResult.signature = "Signature: " + sign.signature;
        } else {
            throw new Error("Signing operation failed, please check your input and try again");
        }

    } catch (error) {
        console.error(error);
        operationResult.issucceeded = false;
        operationResult.signature = null;
        operationResult.message = "System Error";
    }

    return operationResult;
}
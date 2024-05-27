"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class EtherService {
    ///This generate the seed pharse
    static generateWalletAddress() {
        var { mnemonic } = ethers_1.ethers.Wallet.createRandom();
        return mnemonic?.phrase ?? 'not found';
    }
}
exports.default = EtherService;
//# sourceMappingURL=ether_service.js.map
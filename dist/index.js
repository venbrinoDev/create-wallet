"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ether_service_1 = __importDefault(require("./service/ether_service"));
const app = (0, express_1.default)();
const port = 3030;
app.get('/create-wallet', (req, res) => {
    var wallet = ether_service_1.default.generateWalletAddress();
    res.json({ data: wallet });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map
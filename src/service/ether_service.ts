
import { ethers } from "ethers";

class EtherService {


    ///This generate the seed pharse
    public  static generateWalletAddress():string{
      var {mnemonic} =   ethers.Wallet.createRandom();
      return mnemonic?.phrase??'not found';

    }
}

export default EtherService
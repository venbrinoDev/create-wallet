import express from 'express';
import { ethers } from 'ethers';
import EtherService from './service/ether_service';

const app = express();

const port =3030;



app.get('/', (req, res) => {
    
    return res.json({data:"server is on"})
 });
 
app.get('/create-wallet', (req, res) => {
   var wallet = EtherService.generateWalletAddress();
    res.json({ data:wallet });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
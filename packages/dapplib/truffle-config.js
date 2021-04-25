require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'good argue sure spot toy note toss common install opinion bottom slam'; 
let testAccounts = [
"0xea1e61e9970c02c9c500026c845a339da97e7ec4eff5c5946631cb83727b065c",
"0xadea0c23c515acb60ce116d76caa436f5c97faff82b9697f5487e8d2099c0548",
"0xc62d22bb14036885da40e112714f8df369a1f62a0b8ca26025a2a54ea052dc2a",
"0x51a81f51e1d4305ceba62b84f3374af4f5d735dbff423a7ffa082723a083b817",
"0xd36df38c18d9fe4c4c66765dbe5a8e6c99c011a0da95e6a8394558d487a3dfd2",
"0xd57e6f87718b74888c543369eccbb10e99039b54fb9fbf1d27527301764a5295",
"0xb1198f14f9d8b28bc0fee19b1e988e1e3a6fe800bdaa715b3538025de88755c2",
"0x713483af725e1bc338ef4dced09511cba07c5bcc6593bded23828e4201dc28d9",
"0x6b95b951fb88eb96b8f8deb6b0205fbc6f1e07293a979511f04e475b8054ed27",
"0xdd99af33fd7edf8d029bf49cd97f3f3f41eb9e6d77ac7cb5c321c760fb30d8c9"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


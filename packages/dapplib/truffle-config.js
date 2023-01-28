require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success strike cost pulse purchase install kangaroo army gauge'; 
let testAccounts = [
"0xa92b4ccea9a36ca047b5c304a2e16b13eea25a8f1027cb2dce375e1e4971f8fe",
"0x55cc225ebf8b8757a1a716ae72355ab449904bf9b2d580e05d088c763c9fc5c2",
"0xa3fdd8107f3bffef11bb6abd7c2c8930ea4d7a286a7ca75ed0be3d231277cbf6",
"0x9918b401886d6a26930763b5715666848558ec9c5e8ecad9b87c508bc1cedff9",
"0x6168144f9199a201f56d559c25bc1e90ab1dabd0500447f0527af8f4f97c2a0a",
"0x2c40f9589e2ac6128db16716c7f7e2791132c56c233e54c6a8f935b0c1033296",
"0xf58eba8bffc254ce702c9ba1a957a19b759ba3d5222499fc14890022758b1354",
"0x50697b55e86588ed799b416424ea31435af9cec0ff6645d70b6f6853ed81b168",
"0xa04f90889a8b114a44177b2218435db20382cd67e064d51d230c77b4e78b7efb",
"0x493f5605a250439dbd05ddf8ac9da84103a739b650f9f9e4f3237d22c4da51eb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


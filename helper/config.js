const ABI = require("./artifacts/Crypt3dPunksABI");

const contractAddress = "0xa1D3D58f1295FE12f31e13F321A08A88918AD97b";

const infuraKey = "a44bbee405dd4b29afb8874b2c7975ff";

const privateKey =
  "08848e865c6f07e43abf9b6e4ce3dd7364e9d1be450d4d18ef2b558ab8f9b525";

// const network = "homestead";
// const network = "rinkeby";
const network = "goerli";

module.exports = { ABI, contractAddress, network, infuraKey, privateKey };

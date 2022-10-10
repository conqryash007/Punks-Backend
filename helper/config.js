const ABI = require("./artifacts/Crypt3dPunksABI");

const contractAddress = "0x110078e7ed7867b54c07f3b44d0f5129fa3fe643";

const infuraKey = "a44bbee405dd4b29afb8874b2c7975ff";

const privateKey =
  "08848e865c6f07e43abf9b6e4ce3dd7364e9d1be450d4d18ef2b558ab8f9b525";

// const network = "homestead";
// const network = "rinkeby";
const network = "goerli";

module.exports = { ABI, contractAddress, network, infuraKey, privateKey };

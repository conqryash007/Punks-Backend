const {
  ABI,
  contractAddress,
  network,
  infuraKey,
  privateKey,
} = require("./config");
const ethers = require("ethers");

const getCurrentUSD = async (newPricesETH, updatedPrice) => {
  try {
    const provider = new ethers.providers.InfuraProvider(network, infuraKey);
    const punksContract = new ethers.Contract(contractAddress, ABI, provider);
    const res = await punksContract.lastUpatedPriceInWei();
    const price = parseInt(res._hex);
    return price / 100;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getCurrentUSD };

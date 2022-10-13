const { ABI, contractAddress, network, infuraKey } = require("./config");
const ethers = require("ethers");

const getCurrentUSD = async () => {
  try {
    const provider = new ethers.providers.InfuraProvider(network, infuraKey);
    const punksContract = new ethers.Contract(contractAddress, ABI, provider);
    const ethusdContractPrice = await punksContract.EtherPrice();

    let res = parseInt(ethusdContractPrice._hex);
    res = res / 100;

    return res;
  } catch (err) {
    throw new Error(err?.message || "Something Went Wrong");
  }
};

module.exports = { getCurrentUSD };

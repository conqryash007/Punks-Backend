const {
  ABI,
  contractAddress,
  network,
  infuraKey,
  privateKey,
} = require("./config");
const ethers = require("ethers");

const updateContractPrices = async (updatedPrice) => {
  try {
    const provider = new ethers.providers.InfuraProvider(network, infuraKey);
    const signer = new ethers.Wallet(privateKey, provider);

    const punksContract = new ethers.Contract(contractAddress, ABI, signer);

    console.log(updatedPrice);

    // const tx = await punksContract.updateEtherPrice(updatedPrice);

    // await tx.wait();
  } catch (err) {
    console.log(err);
    throw new Error(err?.message || "Something Went Wrong");
  }
};

module.exports = { updateContractPrices };

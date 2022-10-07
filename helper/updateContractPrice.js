const {
  ABI,
  contractAddress,
  network,
  infuraKey,
  privateKey,
} = require("./config");
const ethers = require("ethers");

const updateContractPrices = async (newPricesETH, updatedPrice) => {
  try {
    const provider = new ethers.providers.InfuraProvider(network, infuraKey);
    const signer = new ethers.Wallet(privateKey, provider);

    const punksContract = new ethers.Contract(contractAddress, ABI, signer);
    const resRound = await punksContract.Round();
    const round = parseInt(resRound._hex);

    console.log(updatedPrice);

    const tx = await punksContract.updatePriceForEthersPerRound(
      round,
      newPricesETH,
      updatedPrice
    );

    await tx.wait();
  } catch (err) {
    console.log(err);
    throw new Error(err?.message || "Something Went Wrong");
  }
};

module.exports = { updateContractPrices };

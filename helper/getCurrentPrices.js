const { ABI, contractAddress, network, infuraKey } = require("./config");
const ethers = require("ethers");

const getCurrentPrices = async () => {
  try {
    const provider = new ethers.providers.InfuraProvider(network, infuraKey);
    const punksContract = new ethers.Contract(contractAddress, ABI, provider);
    const resRound = await punksContract.Round();
    const round = parseInt(resRound._hex);

    const promises = [];
    for (let i = 0; i < 6; i++) {
      promises.push(punksContract.amountInEthers(round, i));
    }

    let resEther = await Promise.all(promises);
    resEther = resEther.map((curr) =>
      Number(ethers.utils.formatEther(curr._hex))
    );

    return resEther;
  } catch (err) {
    throw new Error(err?.message || "Something Went Wrong");
  }
};

module.exports = { getCurrentPrices };

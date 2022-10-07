const axios = require("axios");
const { ethers } = require("ethers");
const { getCurrentPrices } = require("./../helper/getCurrentPrices");
const { updateContractPrices } = require("./../helper/updateContractPrice");
const { getCurrentUSD } = require("./../helper/getCurrentUSD");

const updatePrice = async (req, res) => {
  try {
    // TIMER FOR WAITING GIVEN SECONDS
    const wait = async (sec) => {
      const ms = sec * 1000;
      await new Promise((resolve) => setTimeout(resolve, ms));
    };

    while (1) {
      // 1. get the current ETH/USD price from contract
      let contractPriceEther = await getCurrentUSD();

      // 2. get the current ETH/USD price from API
      const response = await axios.get(
        `https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key=4742c115f5680d0f71aeec2c9f70393e176127a06c277d75705868283249468b`
      );
      const data = response.data;
      const marketPriceEther = Number(data.USD);
      console.log(data);

      // 3. Check wether the change in price is greater than a given amount
      const changeInPrice = parseInt(
        (Math.abs(marketPriceEther - contractPriceEther) / contractPriceEther) *
          100
      );
      console.log(changeInPrice, "%");

      if (changeInPrice > 5) {
        const etherPrices = await getCurrentPrices();
        console.log(etherPrices);

        let newEtherPrices = etherPrices.map((curr) => {
          if (marketPriceEther > contractPriceEther) {
            return (curr - curr * (changeInPrice / 100)).toFixed(10);
          } else {
            return (curr + curr * (changeInPrice / 100)).toFixed(10);
          }
        });

        newEtherPrices = newEtherPrices.map((curr) =>
          ethers.utils.parseEther(curr)
        );

        // update new prices in contract
        await updateContractPrices(newEtherPrices, marketPriceEther * 100);

        // to be removed and get from contract
        contractPriceEther = marketPriceEther;
        console.log(newEtherPrices);
      }

      await wait(5);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { updatePrice };

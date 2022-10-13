const axios = require("axios");
const { ethers } = require("ethers");

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
      console.log(contractPriceEther);

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
        // update new prices in contract
        await updateContractPrices(parseInt(marketPriceEther * 100));

        // to be removed and get from contract
        contractPriceEther = marketPriceEther;
      }

      await wait(300);
    }
  } catch (err) {
    console.log(err);
  }
};

updatePrice(1, 1);

module.exports = { updatePrice };

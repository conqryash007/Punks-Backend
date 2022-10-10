module.exports = [
  // {
  //   inputs: [
  //     { internalType: "address", name: "_ExistingERC1155", type: "address" },
  //     { internalType: "address", name: "usdt", type: "address" },
  //     { internalType: "address", name: "usdc", type: "address" },
  //     { internalType: "address", name: "dai", type: "address" },
  //     { internalType: "address", name: "busd", type: "address" },
  //   ],
  //   stateMutability: "nonpayable",
  //   type: "constructor",
  // },
  // {
  //   anonymous: false,
  //   inputs: [
  //     {
  //       indexed: true,
  //       internalType: "address",
  //       name: "owner",
  //       type: "address",
  //     },
  //     {
  //       indexed: true,
  //       internalType: "address",
  //       name: "approved",
  //       type: "address",
  //     },
  //     {
  //       indexed: true,
  //       internalType: "uint256",
  //       name: "tokenId",
  //       type: "uint256",
  //     },
  //   ],
  //   name: "Approval",
  //   type: "event",
  // },
  // {
  //   anonymous: false,
  //   inputs: [
  //     {
  //       indexed: true,
  //       internalType: "address",
  //       name: "owner",
  //       type: "address",
  //     },
  //     {
  //       indexed: true,
  //       internalType: "address",
  //       name: "operator",
  //       type: "address",
  //     },
  //     { indexed: false, internalType: "bool", name: "approved", type: "bool" },
  //   ],
  //   name: "ApprovalForAll",
  //   type: "event",
  // },
  // {
  //   anonymous: false,
  //   inputs: [
  //     {
  //       indexed: true,
  //       internalType: "address",
  //       name: "previousOwner",
  //       type: "address",
  //     },
  //     {
  //       indexed: true,
  //       internalType: "address",
  //       name: "newOwner",
  //       type: "address",
  //     },
  //   ],
  //   name: "OwnershipTransferred",
  //   type: "event",
  // },
  // {
  //   anonymous: false,
  //   inputs: [
  //     {
  //       indexed: false,
  //       internalType: "address",
  //       name: "account",
  //       type: "address",
  //     },
  //   ],
  //   name: "Paused",
  //   type: "event",
  // },
  // {
  //   anonymous: false,
  //   inputs: [
  //     { indexed: true, internalType: "address", name: "from", type: "address" },
  //     { indexed: true, internalType: "address", name: "to", type: "address" },
  //     {
  //       indexed: true,
  //       internalType: "uint256",
  //       name: "tokenId",
  //       type: "uint256",
  //     },
  //   ],
  //   name: "Transfer",
  //   type: "event",
  // },
  // {
  //   anonymous: false,
  //   inputs: [
  //     {
  //       indexed: false,
  //       internalType: "address",
  //       name: "account",
  //       type: "address",
  //     },
  //   ],
  //   name: "Unpaused",
  //   type: "event",
  // },
  // {
  //   inputs: [{ internalType: "uint256", name: "token", type: "uint256" }],
  //   name: "AlterPayment",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //   name: "CryptoCurrencies",
  //   outputs: [{ internalType: "address", name: "", type: "address" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [],
  //   name: "ExistingERC1155",
  //   outputs: [{ internalType: "address", name: "", type: "address" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [],
  //   name: "Round",
  //   outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [{ internalType: "address", name: "validator", type: "address" }],
  //   name: "addValidator",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [
  //     { internalType: "uint256", name: "", type: "uint256" },
  //     { internalType: "uint256", name: "", type: "uint256" },
  //     { internalType: "uint256", name: "", type: "uint256" },
  //   ],
  //   name: "amountInCryptoCurrency",
  //   outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [
  //     { internalType: "uint256", name: "", type: "uint256" },
  //     { internalType: "uint256", name: "", type: "uint256" },
  //   ],
  //   name: "amountInEthers",
  //   outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [
  //     { internalType: "address", name: "to", type: "address" },
  //     { internalType: "uint256", name: "tokenId", type: "uint256" },
  //   ],
  //   name: "approve",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [{ internalType: "address", name: "owner", type: "address" }],
  //   name: "balanceOf",
  //   outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [],
  //   name: "baseURI",
  //   outputs: [{ internalType: "string", name: "", type: "string" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [
  //     { internalType: "uint256", name: "_quantity", type: "uint256" },
  //     { internalType: "address", name: "_to", type: "address" },
  //   ],
  //   name: "batchMint",
  //   outputs: [],
  //   stateMutability: "payable",
  //   type: "function",
  // },
  // {
  //   inputs: [
  //     { internalType: "uint8", name: "token", type: "uint8" },
  //     { internalType: "uint256", name: "_quantity", type: "uint256" },
  //     { internalType: "address", name: "_to", type: "address" },
  //   ],
  //   name: "batchMintUsingCryptoCurrency",
  //   outputs: [],
  //   stateMutability: "payable",
  //   type: "function",
  // },
  // {
  //   inputs: [{ internalType: "uint256[]", name: "nftIds", type: "uint256[]" }],
  //   name: "batchSwapExistingUsers",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
  //   name: "burn",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [],
  //   name: "burnAddress",
  //   outputs: [{ internalType: "address", name: "", type: "address" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [],
  //   name: "contractBalance",
  //   outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [],
  //   name: "currentState",
  //   outputs: [
  //     {
  //       internalType: "enum Crypto3dTest.CurrentState",
  //       name: "",
  //       type: "uint8",
  //     },
  //   ],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
  //   name: "getApproved",
  //   outputs: [{ internalType: "address", name: "", type: "address" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [],
  //   name: "getNextTokenId",
  //   outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [
  //     { internalType: "address", name: "owner", type: "address" },
  //     { internalType: "address", name: "operator", type: "address" },
  //   ],
  //   name: "isApprovedForAll",
  //   outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [],
  //   name: "lastUpatedPriceInWei",
  //   outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [],
  //   name: "name",
  //   outputs: [{ internalType: "string", name: "", type: "string" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [],
  //   name: "owner",
  //   outputs: [{ internalType: "address", name: "", type: "address" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
  //   name: "ownerOf",
  //   outputs: [{ internalType: "address", name: "", type: "address" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [],
  //   name: "pause",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [
  //     { internalType: "uint256", name: "_round", type: "uint256" },
  //     { internalType: "bool", name: "flip", type: "bool" },
  //   ],
  //   name: "pauseUnpauseNFTsTransfer",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [],
  //   name: "paused",
  //   outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //   name: "paymentPermitted",
  //   outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [{ internalType: "address", name: "validator", type: "address" }],
  //   name: "removeValidator",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [],
  //   name: "renounceOwnership",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [{ internalType: "uint256", name: "_round", type: "uint256" }],
  //   name: "reveal",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //   name: "roundCap",
  //   outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //   name: "roundReveal",
  //   outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [
  //     { internalType: "address", name: "from", type: "address" },
  //     { internalType: "address", name: "to", type: "address" },
  //     { internalType: "uint256", name: "tokenId", type: "uint256" },
  //   ],
  //   name: "safeTransferFrom",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [
  //     { internalType: "address", name: "from", type: "address" },
  //     { internalType: "address", name: "to", type: "address" },
  //     { internalType: "uint256", name: "tokenId", type: "uint256" },
  //     { internalType: "bytes", name: "data", type: "bytes" },
  //   ],
  //   name: "safeTransferFrom",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [
  //     { internalType: "address", name: "operator", type: "address" },
  //     { internalType: "bool", name: "approved", type: "bool" },
  //   ],
  //   name: "setApprovalForAll",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //   name: "stopTransfer",
  //   outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
  //   name: "supportsInterface",
  //   outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [],
  //   name: "symbol",
  //   outputs: [{ internalType: "string", name: "", type: "string" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
  //   name: "tokenURI",
  //   outputs: [{ internalType: "string", name: "", type: "string" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [
  //     { internalType: "address", name: "from", type: "address" },
  //     { internalType: "address", name: "to", type: "address" },
  //     { internalType: "uint256", name: "tokenId", type: "uint256" },
  //   ],
  //   name: "transferFrom",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
  //   name: "transferOwnership",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [],
  //   name: "unpause",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [{ internalType: "string", name: "_newbaseURI", type: "string" }],
  //   name: "updateBaseUri",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [
  //     { internalType: "uint256", name: "token", type: "uint256" },
  //     { internalType: "uint256", name: "round", type: "uint256" },
  //     { internalType: "uint256", name: "batch", type: "uint256" },
  //     { internalType: "uint256", name: "updatedValue", type: "uint256" },
  //   ],
  //   name: "updatePriceForCryptoCurrency",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [
  //     { internalType: "uint256", name: "round", type: "uint256" },
  //     { internalType: "uint256", name: "batch", type: "uint256" },
  //     { internalType: "uint256", name: "updatedValue", type: "uint256" },
  //   ],
  //   name: "updatePriceForEthers",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [
  //     { internalType: "uint256", name: "round", type: "uint256" },
  //     { internalType: "uint256[]", name: "updatedValues", type: "uint256[]" },
  //     { internalType: "uint256", name: "updatedprice", type: "uint256" },
  //   ],
  //   name: "updatePriceForEthersPerRound",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [{ internalType: "address", name: "", type: "address" }],
  //   name: "validators",
  //   outputs: [{ internalType: "bool", name: "", type: "bool" }],
  //   stateMutability: "view",
  //   type: "function",
  // },
  // {
  //   inputs: [],
  //   name: "withdrawEthers",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ExistingERC1155",
        type: "address",
      },
      {
        internalType: "address",
        name: "usdt",
        type: "address",
      },
      {
        internalType: "address",
        name: "usdc",
        type: "address",
      },
      {
        internalType: "address",
        name: "dai",
        type: "address",
      },
      {
        internalType: "address",
        name: "busd",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_currentEthPrice",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "token",
        type: "uint256",
      },
    ],
    name: "AlterPayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "CryptoCurrencies",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ExistingERC1155",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Round",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address",
      },
    ],
    name: "addValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "amountInCryptoCurrency",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "amountInEthers",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "batchMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "token",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "batchMintUsingCryptoCurrency",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "nftIds",
        type: "uint256[]",
      },
    ],
    name: "batchSwapExistingUsers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "burnAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentState",
    outputs: [
      {
        internalType: "enum Crypto3dTest.CurrentState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNextTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialEtherPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpatedPriceInWei",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_round",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "flip",
        type: "bool",
      },
    ],
    name: "pauseUnpauseNFTsTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "paymentPermitted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address",
      },
    ],
    name: "removeValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_round",
        type: "uint256",
      },
    ],
    name: "reveal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "roundCap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "roundReveal",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stopTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "newRound",
        type: "bool",
      },
      {
        internalType: "uint256[]",
        name: "updatedPrices",
        type: "uint256[]",
      },
    ],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newbaseURI",
        type: "string",
      },
    ],
    name: "updateBaseUri",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "token",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "round",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedValue",
        type: "uint256",
      },
    ],
    name: "updatePriceForCryptoCurrency",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "round",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedValue",
        type: "uint256",
      },
    ],
    name: "updatePriceForEthers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "round",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "updatedValues",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "updatedprice",
        type: "uint256",
      },
    ],
    name: "updatePriceForEthersPerRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "validators",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawEthers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

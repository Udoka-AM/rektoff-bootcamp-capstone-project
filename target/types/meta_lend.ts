/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/meta_lend.json`.
 */
export type MetaLend = {
  "address": "AYye92emHVPgnxDHnTEkuuWVLUKF7JHKgWsXysZBZ3qe",
  "metadata": {
    "name": "metaLend",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "A flexible lending protocol for Solana"
  },
  "instructions": [
    {
      "name": "borrow",
      "docs": [
        "Borrow supply tokens by depositing collateral tokens"
      ],
      "discriminator": [
        228,
        253,
        131,
        202,
        207,
        116,
        89,
        18
      ],
      "accounts": [
        {
          "name": "market",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              },
              {
                "kind": "account",
                "path": "collateralMint"
              }
            ]
          }
        },
        {
          "name": "supplyVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  112,
                  112,
                  108,
                  121,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              }
            ]
          }
        },
        {
          "name": "collateralVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  108,
                  108,
                  97,
                  116,
                  101,
                  114,
                  97,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "collateralMint"
              }
            ]
          }
        },
        {
          "name": "userDeposit",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              },
              {
                "kind": "account",
                "path": "collateralMint"
              }
            ]
          }
        },
        {
          "name": "supplyMint"
        },
        {
          "name": "collateralMint"
        },
        {
          "name": "userSupplyAccount",
          "writable": true
        },
        {
          "name": "userCollateralAccount",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "collateralOracle"
        },
        {
          "name": "borrowOracle"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "marketId",
          "type": "u64"
        },
        {
          "name": "collateralAmount",
          "type": "u64"
        },
        {
          "name": "borrowAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "closeUserDeposit",
      "docs": [
        "Close user deposit account"
      ],
      "discriminator": [
        59,
        147,
        194,
        212,
        60,
        130,
        251,
        233
      ],
      "accounts": [
        {
          "name": "userDeposit",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "createMarket",
      "docs": [
        "Create a new lending market for any SPL token"
      ],
      "discriminator": [
        103,
        226,
        97,
        235,
        200,
        188,
        251,
        254
      ],
      "accounts": [
        {
          "name": "market",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              },
              {
                "kind": "account",
                "path": "collateralMint"
              }
            ]
          }
        },
        {
          "name": "protocolState",
          "writable": true
        },
        {
          "name": "supplyMint"
        },
        {
          "name": "collateralMint"
        },
        {
          "name": "supplyOracle"
        },
        {
          "name": "collateralOracle"
        },
        {
          "name": "supplyVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  112,
                  112,
                  108,
                  121,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              }
            ]
          }
        },
        {
          "name": "collateralVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  108,
                  108,
                  97,
                  116,
                  101,
                  114,
                  97,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "collateralMint"
              }
            ]
          }
        },
        {
          "name": "creator",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "marketId",
          "type": "u64"
        },
        {
          "name": "collateralFactor",
          "type": "u64"
        },
        {
          "name": "liquidationThreshold",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createOracle",
      "docs": [
        "Create oracle (simplified for demo)"
      ],
      "discriminator": [
        51,
        172,
        229,
        240,
        44,
        41,
        104,
        9
      ],
      "accounts": [
        {
          "name": "oracle",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  114,
                  97,
                  99,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ]
          }
        },
        {
          "name": "mint"
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "source",
          "type": "bytes"
        },
        {
          "name": "initialPrice",
          "type": "u64"
        },
        {
          "name": "decimals",
          "type": "u8"
        }
      ]
    },
    {
      "name": "flashLoan",
      "docs": [
        "Flash loan functionality with external callback"
      ],
      "discriminator": [
        239,
        246,
        59,
        224,
        139,
        20,
        175,
        14
      ],
      "accounts": [
        {
          "name": "market",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              },
              {
                "kind": "account",
                "path": "collateralMint"
              }
            ]
          }
        },
        {
          "name": "supplyVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  112,
                  112,
                  108,
                  121,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              }
            ]
          }
        },
        {
          "name": "supplyMint"
        },
        {
          "name": "collateralMint"
        },
        {
          "name": "userSupplyAccount",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "marketId",
          "type": "u64"
        },
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "callbackData",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "initializeProtocol",
      "docs": [
        "Initialize the lending protocol"
      ],
      "discriminator": [
        188,
        233,
        252,
        106,
        134,
        146,
        202,
        91
      ],
      "accounts": [
        {
          "name": "protocolState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  114,
                  111,
                  116,
                  111,
                  99,
                  111,
                  108
                ]
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializeUserDeposit",
      "docs": [
        "Initialize user deposit account"
      ],
      "discriminator": [
        91,
        164,
        62,
        208,
        251,
        26,
        136,
        183
      ],
      "accounts": [
        {
          "name": "userDeposit",
          "writable": true
        },
        {
          "name": "market",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              },
              {
                "kind": "account",
                "path": "collateralMint"
              }
            ]
          }
        },
        {
          "name": "supplyMint"
        },
        {
          "name": "collateralMint"
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "marketId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "liquidate",
      "docs": [
        "Liquidate undercollateralized positions"
      ],
      "discriminator": [
        223,
        179,
        226,
        125,
        48,
        46,
        39,
        74
      ],
      "accounts": [
        {
          "name": "market",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              },
              {
                "kind": "account",
                "path": "collateralMint"
              }
            ]
          }
        },
        {
          "name": "supplyVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  112,
                  112,
                  108,
                  121,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              }
            ]
          }
        },
        {
          "name": "collateralVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  99,
                  111,
                  108,
                  108,
                  97,
                  116,
                  101,
                  114,
                  97,
                  108,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "collateralMint"
              }
            ]
          }
        },
        {
          "name": "supplyMint"
        },
        {
          "name": "collateralMint"
        },
        {
          "name": "borrowerDeposit",
          "writable": true
        },
        {
          "name": "liquidatorSupplyAccount",
          "writable": true
        },
        {
          "name": "liquidatorCollateralAccount",
          "writable": true
        },
        {
          "name": "liquidator",
          "writable": true,
          "signer": true
        },
        {
          "name": "oracle"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "marketId",
          "type": "u64"
        },
        {
          "name": "liquidationAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "repay",
      "docs": [
        "Repay borrowed tokens"
      ],
      "discriminator": [
        234,
        103,
        67,
        82,
        208,
        234,
        219,
        166
      ],
      "accounts": [
        {
          "name": "market",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              },
              {
                "kind": "account",
                "path": "collateralMint"
              }
            ]
          }
        },
        {
          "name": "supplyVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  112,
                  112,
                  108,
                  121,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              }
            ]
          }
        },
        {
          "name": "userDeposit",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              },
              {
                "kind": "account",
                "path": "collateralMint"
              }
            ]
          }
        },
        {
          "name": "supplyMint"
        },
        {
          "name": "collateralMint"
        },
        {
          "name": "userSupplyAccount",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "marketId",
          "type": "u64"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "supply",
      "docs": [
        "Supply tokens to earn interest (mint cTokens)"
      ],
      "discriminator": [
        81,
        67,
        116,
        61,
        250,
        209,
        5,
        198
      ],
      "accounts": [
        {
          "name": "market",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              },
              {
                "kind": "account",
                "path": "collateralMint"
              }
            ]
          }
        },
        {
          "name": "supplyVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  112,
                  112,
                  108,
                  121,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              }
            ]
          }
        },
        {
          "name": "userDeposit",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              },
              {
                "kind": "account",
                "path": "collateralMint"
              }
            ]
          }
        },
        {
          "name": "supplyMint"
        },
        {
          "name": "collateralMint"
        },
        {
          "name": "userSupplyAccount",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "marketId",
          "type": "u64"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateMarketParams",
      "docs": [
        "Update market parameters"
      ],
      "discriminator": [
        70,
        117,
        202,
        191,
        205,
        174,
        92,
        82
      ],
      "accounts": [
        {
          "name": "market",
          "writable": true
        },
        {
          "name": "authority",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "newCollateralFactor",
          "type": "u64"
        },
        {
          "name": "newLiquidationThreshold",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updateOraclePrice",
      "docs": [
        "Update oracle price"
      ],
      "discriminator": [
        14,
        35,
        163,
        150,
        65,
        116,
        149,
        154
      ],
      "accounts": [
        {
          "name": "oracle",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  111,
                  114,
                  97,
                  99,
                  108,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "oracle.mint",
                "account": "oracle"
              }
            ]
          }
        },
        {
          "name": "authority",
          "signer": true,
          "relations": [
            "oracle"
          ]
        }
      ],
      "args": [
        {
          "name": "newPrice",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "docs": [
        "Withdraw supplied tokens (burn cTokens)"
      ],
      "discriminator": [
        183,
        18,
        70,
        156,
        148,
        109,
        161,
        34
      ],
      "accounts": [
        {
          "name": "market",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  97,
                  114,
                  107,
                  101,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              },
              {
                "kind": "account",
                "path": "collateralMint"
              }
            ]
          }
        },
        {
          "name": "supplyVault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  117,
                  112,
                  112,
                  108,
                  121,
                  95,
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              }
            ]
          }
        },
        {
          "name": "userDeposit",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114,
                  95,
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "arg",
                "path": "marketId"
              },
              {
                "kind": "account",
                "path": "supplyMint"
              },
              {
                "kind": "account",
                "path": "collateralMint"
              }
            ]
          }
        },
        {
          "name": "supplyMint"
        },
        {
          "name": "collateralMint"
        },
        {
          "name": "userSupplyAccount",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "supplyOracle"
        },
        {
          "name": "collateralOracle"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "marketId",
          "type": "u64"
        },
        {
          "name": "ctokenAmount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "market",
      "discriminator": [
        219,
        190,
        213,
        55,
        0,
        227,
        198,
        154
      ]
    },
    {
      "name": "oracle",
      "discriminator": [
        139,
        194,
        131,
        179,
        140,
        179,
        229,
        244
      ]
    },
    {
      "name": "protocolState",
      "discriminator": [
        33,
        51,
        173,
        134,
        35,
        140,
        195,
        248
      ]
    },
    {
      "name": "userDeposit",
      "discriminator": [
        69,
        238,
        23,
        217,
        255,
        137,
        185,
        35
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "unauthorized",
      "msg": "Unauthorized operation"
    },
    {
      "code": 6001,
      "name": "mathOverflow",
      "msg": "Math overflow"
    },
    {
      "code": 6002,
      "name": "insufficientBalance",
      "msg": "Insufficient balance"
    },
    {
      "code": 6003,
      "name": "insufficientCollateral",
      "msg": "Insufficient collateral"
    },
    {
      "code": 6004,
      "name": "insufficientLiquidity",
      "msg": "Insufficient liquidity"
    },
    {
      "code": 6005,
      "name": "positionHealthy",
      "msg": "Position is healthy - cannot liquidate"
    },
    {
      "code": 6006,
      "name": "excessiveLiquidation",
      "msg": "Excessive liquidation amount"
    },
    {
      "code": 6007,
      "name": "flashLoanNotRepaid",
      "msg": "Flash loan not repaid"
    },
    {
      "code": 6008,
      "name": "hasDeposits",
      "msg": "Account has deposits"
    },
    {
      "code": 6009,
      "name": "hasBorrows",
      "msg": "Account has borrows"
    },
    {
      "code": 6010,
      "name": "noLamportsToSteal",
      "msg": "No lamports available to steal"
    },
    {
      "code": 6011,
      "name": "accountAlreadyInitialized",
      "msg": "Account is already initialized"
    },
    {
      "code": 6012,
      "name": "divisionByZero",
      "msg": "Division by zero"
    },
    {
      "code": 6013,
      "name": "marketNotFound",
      "msg": "Market not found"
    },
    {
      "code": 6014,
      "name": "marketPaused",
      "msg": "Market is paused"
    },
    {
      "code": 6015,
      "name": "invalidOracleData",
      "msg": "Invalid oracle data"
    },
    {
      "code": 6016,
      "name": "marketNotActive",
      "msg": "Market is not active"
    },
    {
      "code": 6017,
      "name": "invalidMarketState",
      "msg": "Invalid market state"
    },
    {
      "code": 6018,
      "name": "userDepositAlreadyExists",
      "msg": "User deposit account already exists"
    },
    {
      "code": 6019,
      "name": "invalidPda",
      "msg": "Invalid PDA"
    }
  ],
  "types": [
    {
      "name": "market",
      "docs": [
        "Individual lending markets with supply and collateral assets"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "marketId",
            "type": "u64"
          },
          {
            "name": "supplyMint",
            "type": "pubkey"
          },
          {
            "name": "collateralMint",
            "type": "pubkey"
          },
          {
            "name": "marketAdmin",
            "type": "pubkey"
          },
          {
            "name": "totalSupplyDeposits",
            "type": "u128"
          },
          {
            "name": "totalBorrows",
            "type": "u128"
          },
          {
            "name": "totalCollateralDeposits",
            "type": "u128"
          },
          {
            "name": "totalCtokenSupply",
            "type": "u128"
          },
          {
            "name": "collateralFactor",
            "type": "u64"
          },
          {
            "name": "liquidationThreshold",
            "type": "u64"
          },
          {
            "name": "lastUpdateSlot",
            "type": "u64"
          },
          {
            "name": "cumulativeBorrowRate",
            "type": "u128"
          },
          {
            "name": "cumulativeSupplyRate",
            "type": "u128"
          },
          {
            "name": "supplyOracle",
            "type": "pubkey"
          },
          {
            "name": "collateralOracle",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "isActive",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "oracle",
      "docs": [
        "Oracle account for price feeds with proper validation"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "source",
            "type": "bytes"
          },
          {
            "name": "price",
            "type": "u128"
          },
          {
            "name": "decimals",
            "type": "u8"
          },
          {
            "name": "validSlot",
            "type": "u64"
          },
          {
            "name": "confidence",
            "type": "u128"
          },
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "protocolState",
      "docs": [
        "Global protocol configuration and admin controls"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "totalMarkets",
            "type": "u64"
          },
          {
            "name": "isPaused",
            "type": "bool"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "userDeposit",
      "docs": [
        "Per-user account tracking supply deposits, collateral deposits, borrows, and cToken balances"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "market",
            "type": "pubkey"
          },
          {
            "name": "supplyDeposited",
            "type": "u128"
          },
          {
            "name": "collateralDeposited",
            "type": "u128"
          },
          {
            "name": "borrowedAmount",
            "type": "u128"
          },
          {
            "name": "ctokenBalance",
            "type": "u128"
          },
          {
            "name": "lastUpdateSlot",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ]
};

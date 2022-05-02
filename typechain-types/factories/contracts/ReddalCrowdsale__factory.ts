/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ReddalCrowdsale,
  ReddalCrowdsaleInterface,
} from "../../contracts/ReddalCrowdsale";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "_price",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "rate",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "pauseICO",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "unpause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "weiRaised",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "isPauser",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "wallet",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newETHUSDRate",
        type: "uint256",
      },
    ],
    name: "updateETHUSDRate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "paused",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "unpauseICO",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renouncePauser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "ETHUSD",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "addPauser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "pause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "updater",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "ethusdRate",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "buyTokens",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "token",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "rate",
        type: "uint256",
      },
      {
        name: "wallet",
        type: "address",
      },
      {
        name: "token",
        type: "address",
      },
      {
        name: "_updater",
        type: "address",
      },
      {
        name: "price",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
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
        indexed: false,
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "PauserAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "PauserRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "purchaser",
        type: "address",
      },
      {
        indexed: true,
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensPurchased",
    type: "event",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405160a080620022bb833981018060405260a08110156200003357600080fd5b81019080805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919050505084848460016000806101000a81548160ff02191690831515021790555060008311151562000102576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f43726f776473616c653a2072617465206973203000000000000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156200018c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180620022966025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151562000216576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180620022506024913960400191505060405180910390fd5b8260028190555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050620002c2620002b6620003e860201b60201c565b620003f060201b60201c565b6000600560006101000a81548160ff0219169083151502179055506000620002ef620003e860201b60201c565b905080600560016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350806007819055508460098190555081600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050505062000619565b600033905090565b6200040b8160046200045160201b620016a11790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b6200046382826200053760201b60201c565b151515620004d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515620005c2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180620022746022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611c2780620006296000396000f3fe6080604052600436106101355760003560e01c8063715018a6116100ab5780638f32d59b1161006f5780638f32d59b1461044f578063df034cd01461047e578063df4c2605146104d5578063ec8ac4d814610500578063f2fde38b14610544578063fc0c546a1461059557610135565b8063715018a61461034e57806373db08441461036557806382dc1ec4146103905780638456cb59146103e15780638da5cb5b146103f857610135565b806346fbf68e116100fd57806346fbf68e146101f6578063521eb2731461025f57806359fcaa49146102b65780635c975abb146102f157806363d177e6146103205780636ef8d66d1461033757610135565b8063235b6ea1146101475780632c4e722e1461017257806333c77a6d1461019d5780633f4ba83a146101b45780634042b66f146101cb575b6101456101406105ec565b6105f4565b005b34801561015357600080fd5b5061015c610781565b6040518082815260200191505060405180910390f35b34801561017e57600080fd5b50610187610787565b6040518082815260200191505060405180910390f35b3480156101a957600080fd5b506101b2610791565b005b3480156101c057600080fd5b506101c9610817565b005b3480156101d757600080fd5b506101e0610989565b6040518082815260200191505060405180910390f35b34801561020257600080fd5b506102456004803603602081101561021957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610993565b604051808215151515815260200191505060405180910390f35b34801561026b57600080fd5b506102746109b0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102c257600080fd5b506102ef600480360360208110156102d957600080fd5b81019080803590602001909291905050506109da565b005b3480156102fd57600080fd5b50610306610abb565b604051808215151515815260200191505060405180910390f35b34801561032c57600080fd5b50610335610ad2565b005b34801561034357600080fd5b5061034c610b58565b005b34801561035a57600080fd5b50610363610b6a565b005b34801561037157600080fd5b5061037a610ca7565b6040518082815260200191505060405180910390f35b34801561039c57600080fd5b506103df600480360360208110156103b357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610cad565b005b3480156103ed57600080fd5b506103f6610d20565b005b34801561040457600080fd5b5061040d610e93565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561045b57600080fd5b50610464610ebd565b604051808215151515815260200191505060405180910390f35b34801561048a57600080fd5b50610493610f1c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156104e157600080fd5b506104ea610f42565b6040518082815260200191505060405180910390f35b6105426004803603602081101561051657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105f4565b005b34801561055057600080fd5b506105936004803603602081101561056757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f4c565b005b3480156105a157600080fd5b506105aa610fd4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600033905090565b6000809054906101000a900460ff161515610677576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b60008060006101000a81548160ff02191690831515021790555060003490506106a08282610ffd565b60006106ab82611102565b90506106c28260035461112090919063ffffffff16565b6003819055506106d283826111aa565b8273ffffffffffffffffffffffffffffffffffffffff166106f16105ec565b73ffffffffffffffffffffffffffffffffffffffff167f6faf93231a456e552dbc9961f58d9713ee4f2e69d15f1975b050ef0911053a7b8484604051808381526020018281526020019250505060405180910390a361075083836111b8565b6107586111bc565b6107628383611227565b505060016000806101000a81548160ff02191690831515021790555050565b60075481565b6000600954905090565b610799610ebd565b151561080d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610815610d20565b565b6108276108226105ec565b610993565b151561087e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611aee6030913960400191505060405180910390fd5b600560009054906101000a900460ff161515610902576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5061757361626c653a206e6f742070617573656400000000000000000000000081525060200191505060405180910390fd5b6000600560006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6109466105ec565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b6000600354905090565b60006109a982600461122b90919063ffffffff16565b9050919050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a3757600080fd5b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a9357600080fd5b60008214151515610aa357600080fd5b81600681905550600754600654026009819055505050565b6000600560009054906101000a900460ff16905090565b610ada610ebd565b1515610b4e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610b56610817565b565b610b68610b636105ec565b61130b565b565b610b72610ebd565b1515610be6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600560016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60065481565b610cbd610cb86105ec565b610993565b1515610d14576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611aee6030913960400191505060405180910390fd5b610d1d81611365565b50565b610d30610d2b6105ec565b610993565b1515610d87576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611aee6030913960400191505060405180910390fd5b600560009054906101000a900460ff16151515610e0c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6001600560006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610e506105ec565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b6000600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610f006105ec565b73ffffffffffffffffffffffffffffffffffffffff1614905090565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600654905090565b610f54610ebd565b1515610fc8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610fd1816113bf565b50565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611085576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611ba8602a913960400191505060405180910390fd5b600081141515156110fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f43726f776473616c653a20776569416d6f756e7420697320300000000000000081525060200191505060405180910390fd5b5050565b60006111196009548361150790919063ffffffff16565b9050919050565b60008082840190508381101515156111a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6111b48282611591565b5050565b5050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015611224573d6000803e3d6000fd5b50565b5050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156112b4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611b866022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61131f8160046115e290919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e60405160405180910390a250565b6113798160046116a190919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515611447576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611b1e6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600560016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008083141561151a576000905061158b565b6000828402905082848281151561152d57fe5b04141515611586576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611b656021913960400191505060405180910390fd5b809150505b92915050565b6115de8282600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661177e9092919063ffffffff16565b5050565b6115ec828261122b565b1515611643576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611b446021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6116ab828261122b565b151515611720576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61184a838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb905060e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061184f565b505050565b61186e8273ffffffffffffffffffffffffffffffffffffffff16611aa2565b15156118e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e74726163740081525060200191505060405180910390fd5b600060608373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b602083101515611933578051825260208201915060208101905060208303925061190e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611995576040519150601f19603f3d011682016040523d82523d6000602084013e61199a565b606091505b5091509150811515611a14576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656481525060200191505060405180910390fd5b600081511115611a9c57808060200190516020811015611a3357600080fd5b81019080805190602001909291905050501515611a9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611bd2602a913960400191505060405180910390fd5b5b50505050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f9150808214158015611ae457506000801b8214155b9250505091905056fe506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c654f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c65536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77526f6c65733a206163636f756e7420697320746865207a65726f206164647265737343726f776473616c653a2062656e656669636961727920697320746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a165627a7a7230582033384c32833e98283b8ae95f418a770f531e2afd581384413c3df28f0c9e2d01002943726f776473616c653a20746f6b656e20697320746865207a65726f2061646472657373526f6c65733a206163636f756e7420697320746865207a65726f206164647265737343726f776473616c653a2077616c6c657420697320746865207a65726f2061646472657373";

type ReddalCrowdsaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReddalCrowdsaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReddalCrowdsale__factory extends ContractFactory {
  constructor(...args: ReddalCrowdsaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    rate: BigNumberish,
    wallet: string,
    token: string,
    _updater: string,
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ReddalCrowdsale> {
    return super.deploy(
      rate,
      wallet,
      token,
      _updater,
      price,
      overrides || {}
    ) as Promise<ReddalCrowdsale>;
  }
  override getDeployTransaction(
    rate: BigNumberish,
    wallet: string,
    token: string,
    _updater: string,
    price: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      rate,
      wallet,
      token,
      _updater,
      price,
      overrides || {}
    );
  }
  override attach(address: string): ReddalCrowdsale {
    return super.attach(address) as ReddalCrowdsale;
  }
  override connect(signer: Signer): ReddalCrowdsale__factory {
    return super.connect(signer) as ReddalCrowdsale__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReddalCrowdsaleInterface {
    return new utils.Interface(_abi) as ReddalCrowdsaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReddalCrowdsale {
    return new Contract(address, _abi, signerOrProvider) as ReddalCrowdsale;
  }
}

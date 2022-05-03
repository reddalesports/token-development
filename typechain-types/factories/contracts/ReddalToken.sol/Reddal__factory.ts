/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Reddal,
  ReddalInterface,
} from "../../../contracts/ReddalToken.sol/Reddal";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
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
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "pause",
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
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "totalSupply",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060601b60805234801561001757600080fd5b5060805160601c611be361005260003960008181610499015281816104e2015281816105f50152818161063501526106c80152611be36000f3fe60806040526004361061012a5760003560e01c80635c975abb116100ab5780638da5cb5b1161006f5780638da5cb5b146102db57806395d89b4114610303578063a457c2d714610318578063a9059cbb14610338578063dd62ed3e14610358578063f2fde38b1461039e5761012a565b80635c975abb1461026457806370a082311461027c578063715018a61461029c5780638129fc1c146102b15780638456cb59146102c65761012a565b80633659cfe6116100f25780633659cfe6146101e557806339509351146102075780633f4ba83a146102275780634f1ef2861461023c57806352d1902d1461024f5761012a565b806306fdde031461012f578063095ea7b31461015a57806318160ddd1461018a57806323b872dd146101a9578063313ce567146101c9575b600080fd5b34801561013b57600080fd5b506101446103be565b604051610151919061183a565b60405180910390f35b34801561016657600080fd5b5061017a6101753660046117dd565b610450565b6040519015158152602001610151565b34801561019657600080fd5b506035545b604051908152602001610151565b3480156101b557600080fd5b5061017a6101c43660046116e5565b610468565b3480156101d557600080fd5b5060405160128152602001610151565b3480156101f157600080fd5b50610205610200366004611699565b61048e565b005b34801561021357600080fd5b5061017a6102223660046117dd565b610577565b34801561023357600080fd5b506102056105b6565b61020561024a366004611720565b6105ea565b34801561025b57600080fd5b5061019b6106bb565b34801561027057600080fd5b5060655460ff1661017a565b34801561028857600080fd5b5061019b610297366004611699565b61076e565b3480156102a857600080fd5b5061020561078d565b3480156102bd57600080fd5b506102056107c1565b3480156102d257600080fd5b50610205610901565b3480156102e757600080fd5b506097546040516001600160a01b039091168152602001610151565b34801561030f57600080fd5b50610144610933565b34801561032457600080fd5b5061017a6103333660046117dd565b610942565b34801561034457600080fd5b5061017a6103533660046117dd565b6109df565b34801561036457600080fd5b5061019b6103733660046116b3565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b3480156103aa57600080fd5b506102056103b9366004611699565b6109ed565b6060603680546103cd90611aff565b80601f01602080910402602001604051908101604052809291908181526020018280546103f990611aff565b80156104465780601f1061041b57610100808354040283529160200191610446565b820191906000526020600020905b81548152906001019060200180831161042957829003601f168201915b5050505050905090565b60003361045e818585610a85565b5060019392505050565b600033610476858285610ba9565b610481858585610c3b565b60019150505b9392505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156104e05760405162461bcd60e51b81526004016104d79061186d565b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610529600080516020611b67833981519152546001600160a01b031690565b6001600160a01b03161461054f5760405162461bcd60e51b81526004016104d7906118b9565b61055881610e14565b6040805160008082526020820190925261057491839190610e3e565b50565b3360008181526034602090815260408083206001600160a01b038716845290915281205490919061045e90829086906105b1908790611985565b610a85565b6097546001600160a01b031633146105e05760405162461bcd60e51b81526004016104d790611905565b6105e8610fc2565b565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156106335760405162461bcd60e51b81526004016104d79061186d565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661067c600080516020611b67833981519152546001600160a01b031690565b6001600160a01b0316146106a25760405162461bcd60e51b81526004016104d7906118b9565b6106ab82610e14565b6106b782826001610e3e565b5050565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461075b5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016104d7565b50600080516020611b6783398151915290565b6001600160a01b0381166000908152603360205260409020545b919050565b6097546001600160a01b031633146107b75760405162461bcd60e51b81526004016104d790611905565b6105e86000611055565b600054610100900460ff166107dc5760005460ff16156107e0565b303b155b6108435760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104d7565b600054610100900460ff1615801561086e576000805460ff1961ff0019909116610100171660011790555b6108b46040518060400160405280600681526020016514995919185b60d21b8152506040518060400160405280600681526020016514915111105360d21b8152506110a7565b6108bc6110d8565b6108c4611107565b6108cc611136565b6108ed336108dc6012600a6119e3565b6108e890612710611ab4565b61115d565b8015610574576000805461ff001916905550565b6097546001600160a01b0316331461092b5760405162461bcd60e51b81526004016104d790611905565b6105e8611249565b6060603780546103cd90611aff565b3360008181526034602090815260408083206001600160a01b0387168452909152812054909190838110156109c75760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104d7565b6109d48286868403610a85565b506001949350505050565b60003361045e818585610c3b565b6097546001600160a01b03163314610a175760405162461bcd60e51b81526004016104d790611905565b6001600160a01b038116610a7c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104d7565b61057481611055565b6001600160a01b038316610ae75760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104d7565b6001600160a01b038216610b485760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104d7565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152603460209081526040808320938616835292905220546000198114610c355781811015610c285760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104d7565b610c358484848403610a85565b50505050565b6001600160a01b038316610c9f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104d7565b6001600160a01b038216610d015760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104d7565b610d0c8383836112c4565b6001600160a01b03831660009081526033602052604090205481811015610d845760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104d7565b6001600160a01b03808516600090815260336020526040808220858503905591851681529081208054849290610dbb908490611985565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610e0791815260200190565b60405180910390a3610c35565b6097546001600160a01b031633146105745760405162461bcd60e51b81526004016104d790611905565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610e7657610e718361130a565b610fbd565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b158015610eaf57600080fd5b505afa925050508015610edf575060408051601f3d908101601f19168201909252610edc91810190611806565b60015b610f425760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b60648201526084016104d7565b600080516020611b678339815191528114610fb15760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b60648201526084016104d7565b50610fbd8383836113a6565b505050565b60655460ff1661100b5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016104d7565b6065805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166110ce5760405162461bcd60e51b81526004016104d79061193a565b6106b782826113cb565b600054610100900460ff166110ff5760405162461bcd60e51b81526004016104d79061193a565b6105e8611419565b600054610100900460ff1661112e5760405162461bcd60e51b81526004016104d79061193a565b6105e861144c565b600054610100900460ff166105e85760405162461bcd60e51b81526004016104d79061193a565b6001600160a01b0382166111b35760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104d7565b6111bf600083836112c4565b80603560008282546111d19190611985565b90915550506001600160a01b038216600090815260336020526040812080548392906111fe908490611985565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36106b7565b60655460ff161561128f5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104d7565b6065805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586110383390565b60655460ff1615610e715760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016104d7565b6001600160a01b0381163b6113775760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016104d7565b600080516020611b6783398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6113af8361147c565b6000825111806113bc5750805b15610fbd57610c3583836114bc565b600054610100900460ff166113f25760405162461bcd60e51b81526004016104d79061193a565b81516114059060369060208501906115e9565b508051610fbd9060379060208401906115e9565b600054610100900460ff166114405760405162461bcd60e51b81526004016104d79061193a565b6065805460ff19169055565b600054610100900460ff166114735760405162461bcd60e51b81526004016104d79061193a565b6105e833611055565b6114858161130a565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b6115245760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016104d7565b600080846001600160a01b03168460405161153f919061181e565b600060405180830381855af49150503d806000811461157a576040519150601f19603f3d011682016040523d82523d6000602084013e61157f565b606091505b50915091506115a78282604051806060016040528060278152602001611b87602791396115b0565b95945050505050565b606083156115bf575081610487565b8251156115cf5782518084602001fd5b8160405162461bcd60e51b81526004016104d7919061183a565b8280546115f590611aff565b90600052602060002090601f016020900481019282611617576000855561165d565b82601f1061163057805160ff191683800117855561165d565b8280016001018555821561165d579182015b8281111561165d578251825591602001919060010190611642565b5061166992915061166d565b5090565b5b80821115611669576000815560010161166e565b80356001600160a01b038116811461078857600080fd5b6000602082840312156116aa578081fd5b61048782611682565b600080604083850312156116c5578081fd5b6116ce83611682565b91506116dc60208401611682565b90509250929050565b6000806000606084860312156116f9578081fd5b61170284611682565b925061171060208501611682565b9150604084013590509250925092565b60008060408385031215611732578182fd5b61173b83611682565b9150602083013567ffffffffffffffff80821115611757578283fd5b818501915085601f83011261176a578283fd5b81358181111561177c5761177c611b50565b604051601f8201601f19908116603f011681019083821181831017156117a4576117a4611b50565b816040528281528860208487010111156117bc578586fd5b82602086016020830137856020848301015280955050505050509250929050565b600080604083850312156117ef578182fd5b6117f883611682565b946020939093013593505050565b600060208284031215611817578081fd5b5051919050565b60008251611830818460208701611ad3565b9190910192915050565b6000602082528251806020840152611859816040850160208701611ad3565b601f01601f19169190910160400192915050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000821982111561199857611998611b3a565b500190565b80825b60018086116119af57506119da565b8187048211156119c1576119c1611b3a565b808616156119ce57918102915b9490941c9380026119a0565b94509492505050565b600061048760001960ff8516846000826119ff57506001610487565b81611a0c57506000610487565b8160018114611a225760028114611a2c57611a59565b6001915050610487565b60ff841115611a3d57611a3d611b3a565b6001841b915084821115611a5357611a53611b3a565b50610487565b5060208310610133831016604e8410600b8410161715611a8c575081810a83811115611a8757611a87611b3a565b610487565b611a99848484600161199d565b808604821115611aab57611aab611b3a565b02949350505050565b6000816000190483118215151615611ace57611ace611b3a565b500290565b60005b83811015611aee578181015183820152602001611ad6565b83811115610c355750506000910152565b600281046001821680611b1357607f821691505b60208210811415611b3457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220e0e5120bfbcc0e7227eb91a341abf6126ff487170e59c709976bf38022634a4364736f6c63430008020033";

type ReddalConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReddalConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Reddal__factory extends ContractFactory {
  constructor(...args: ReddalConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Reddal> {
    return super.deploy(overrides || {}) as Promise<Reddal>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Reddal {
    return super.attach(address) as Reddal;
  }
  override connect(signer: Signer): Reddal__factory {
    return super.connect(signer) as Reddal__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReddalInterface {
    return new utils.Interface(_abi) as ReddalInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Reddal {
    return new Contract(address, _abi, signerOrProvider) as Reddal;
  }
}

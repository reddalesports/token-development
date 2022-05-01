/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ReentrancyGuard,
  ReentrancyGuardInterface,
} from "../../../openzeppelin2/utils/ReentrancyGuard";

const _abi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

export class ReentrancyGuard__factory {
  static readonly abi = _abi;
  static createInterface(): ReentrancyGuardInterface {
    return new utils.Interface(_abi) as ReentrancyGuardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReentrancyGuard {
    return new Contract(address, _abi, signerOrProvider) as ReentrancyGuard;
  }
}

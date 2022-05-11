/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface ReddalCrowdsaleInterface extends utils.Interface {
  functions: {
    "resume()": FunctionFragment;
    "ended()": FunctionFragment;
    "_price()": FunctionFragment;
    "enabled()": FunctionFragment;
    "rate()": FunctionFragment;
    "disable()": FunctionFragment;
    "pauseICO()": FunctionFragment;
    "unpause()": FunctionFragment;
    "weiRaised()": FunctionFragment;
    "isPauser(address)": FunctionFragment;
    "_updater()": FunctionFragment;
    "wallet()": FunctionFragment;
    "updateETHUSDRate(uint256)": FunctionFragment;
    "paused()": FunctionFragment;
    "unpauseICO()": FunctionFragment;
    "renouncePauser()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "ETHUSD()": FunctionFragment;
    "addPauser(address)": FunctionFragment;
    "pause()": FunctionFragment;
    "owner()": FunctionFragment;
    "isOwner()": FunctionFragment;
    "enable()": FunctionFragment;
    "ethusdRate()": FunctionFragment;
    "buyTokens(address)": FunctionFragment;
    "end()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "token()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "resume"
      | "ended"
      | "_price"
      | "enabled"
      | "rate"
      | "disable"
      | "pauseICO"
      | "unpause"
      | "weiRaised"
      | "isPauser"
      | "_updater"
      | "wallet"
      | "updateETHUSDRate"
      | "paused"
      | "unpauseICO"
      | "renouncePauser"
      | "renounceOwnership"
      | "ETHUSD"
      | "addPauser"
      | "pause"
      | "owner"
      | "isOwner"
      | "enable"
      | "ethusdRate"
      | "buyTokens"
      | "end"
      | "transferOwnership"
      | "token"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "resume", values?: undefined): string;
  encodeFunctionData(functionFragment: "ended", values?: undefined): string;
  encodeFunctionData(functionFragment: "_price", values?: undefined): string;
  encodeFunctionData(functionFragment: "enabled", values?: undefined): string;
  encodeFunctionData(functionFragment: "rate", values?: undefined): string;
  encodeFunctionData(functionFragment: "disable", values?: undefined): string;
  encodeFunctionData(functionFragment: "pauseICO", values?: undefined): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(functionFragment: "weiRaised", values?: undefined): string;
  encodeFunctionData(functionFragment: "isPauser", values: [string]): string;
  encodeFunctionData(functionFragment: "_updater", values?: undefined): string;
  encodeFunctionData(functionFragment: "wallet", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateETHUSDRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unpauseICO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renouncePauser",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ETHUSD", values?: undefined): string;
  encodeFunctionData(functionFragment: "addPauser", values: [string]): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(functionFragment: "enable", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ethusdRate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "buyTokens", values: [string]): string;
  encodeFunctionData(functionFragment: "end", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "resume", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ended", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_price", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "enabled", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "disable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pauseICO", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weiRaised", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_updater", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wallet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateETHUSDRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpauseICO", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renouncePauser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ETHUSD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addPauser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "enable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ethusdRate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "end", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {
    "Enabled(address)": EventFragment;
    "Stopped(address)": EventFragment;
    "Ended(address)": EventFragment;
    "Resume(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "PauserAdded(address)": EventFragment;
    "PauserRemoved(address)": EventFragment;
    "TokensPurchased(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Enabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Stopped"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Ended"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Resume"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauserAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauserRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensPurchased"): EventFragment;
}

export interface EnabledEventObject {
  account: string;
}
export type EnabledEvent = TypedEvent<[string], EnabledEventObject>;

export type EnabledEventFilter = TypedEventFilter<EnabledEvent>;

export interface StoppedEventObject {
  account: string;
}
export type StoppedEvent = TypedEvent<[string], StoppedEventObject>;

export type StoppedEventFilter = TypedEventFilter<StoppedEvent>;

export interface EndedEventObject {
  account: string;
}
export type EndedEvent = TypedEvent<[string], EndedEventObject>;

export type EndedEventFilter = TypedEventFilter<EndedEvent>;

export interface ResumeEventObject {
  account: string;
}
export type ResumeEvent = TypedEvent<[string], ResumeEventObject>;

export type ResumeEventFilter = TypedEventFilter<ResumeEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface PauserAddedEventObject {
  account: string;
}
export type PauserAddedEvent = TypedEvent<[string], PauserAddedEventObject>;

export type PauserAddedEventFilter = TypedEventFilter<PauserAddedEvent>;

export interface PauserRemovedEventObject {
  account: string;
}
export type PauserRemovedEvent = TypedEvent<[string], PauserRemovedEventObject>;

export type PauserRemovedEventFilter = TypedEventFilter<PauserRemovedEvent>;

export interface TokensPurchasedEventObject {
  purchaser: string;
  beneficiary: string;
  value: BigNumber;
  amount: BigNumber;
}
export type TokensPurchasedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  TokensPurchasedEventObject
>;

export type TokensPurchasedEventFilter = TypedEventFilter<TokensPurchasedEvent>;

export interface ReddalCrowdsale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ReddalCrowdsaleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    resume(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ended(overrides?: CallOverrides): Promise<[boolean]>;

    _price(overrides?: CallOverrides): Promise<[BigNumber]>;

    enabled(overrides?: CallOverrides): Promise<[boolean]>;

    rate(overrides?: CallOverrides): Promise<[BigNumber]>;

    disable(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pauseICO(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    weiRaised(overrides?: CallOverrides): Promise<[BigNumber]>;

    isPauser(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    _updater(overrides?: CallOverrides): Promise<[string]>;

    wallet(overrides?: CallOverrides): Promise<[string]>;

    updateETHUSDRate(
      newETHUSDRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    unpauseICO(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renouncePauser(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ETHUSD(overrides?: CallOverrides): Promise<[BigNumber]>;

    addPauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    enable(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ethusdRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    buyTokens(
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    end(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  resume(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ended(overrides?: CallOverrides): Promise<boolean>;

  _price(overrides?: CallOverrides): Promise<BigNumber>;

  enabled(overrides?: CallOverrides): Promise<boolean>;

  rate(overrides?: CallOverrides): Promise<BigNumber>;

  disable(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pauseICO(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  weiRaised(overrides?: CallOverrides): Promise<BigNumber>;

  isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;

  _updater(overrides?: CallOverrides): Promise<string>;

  wallet(overrides?: CallOverrides): Promise<string>;

  updateETHUSDRate(
    newETHUSDRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  unpauseICO(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renouncePauser(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ETHUSD(overrides?: CallOverrides): Promise<BigNumber>;

  addPauser(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  isOwner(overrides?: CallOverrides): Promise<boolean>;

  enable(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ethusdRate(overrides?: CallOverrides): Promise<BigNumber>;

  buyTokens(
    beneficiary: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  end(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    resume(overrides?: CallOverrides): Promise<void>;

    ended(overrides?: CallOverrides): Promise<boolean>;

    _price(overrides?: CallOverrides): Promise<BigNumber>;

    enabled(overrides?: CallOverrides): Promise<boolean>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    disable(overrides?: CallOverrides): Promise<void>;

    pauseICO(overrides?: CallOverrides): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    weiRaised(overrides?: CallOverrides): Promise<BigNumber>;

    isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;

    _updater(overrides?: CallOverrides): Promise<string>;

    wallet(overrides?: CallOverrides): Promise<string>;

    updateETHUSDRate(
      newETHUSDRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    unpauseICO(overrides?: CallOverrides): Promise<void>;

    renouncePauser(overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    ETHUSD(overrides?: CallOverrides): Promise<BigNumber>;

    addPauser(account: string, overrides?: CallOverrides): Promise<void>;

    pause(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    isOwner(overrides?: CallOverrides): Promise<boolean>;

    enable(overrides?: CallOverrides): Promise<void>;

    ethusdRate(overrides?: CallOverrides): Promise<BigNumber>;

    buyTokens(beneficiary: string, overrides?: CallOverrides): Promise<void>;

    end(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Enabled(address)"(account?: null): EnabledEventFilter;
    Enabled(account?: null): EnabledEventFilter;

    "Stopped(address)"(account?: null): StoppedEventFilter;
    Stopped(account?: null): StoppedEventFilter;

    "Ended(address)"(account?: null): EndedEventFilter;
    Ended(account?: null): EndedEventFilter;

    "Resume(address)"(account?: null): ResumeEventFilter;
    Resume(account?: null): ResumeEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "PauserAdded(address)"(account?: string | null): PauserAddedEventFilter;
    PauserAdded(account?: string | null): PauserAddedEventFilter;

    "PauserRemoved(address)"(account?: string | null): PauserRemovedEventFilter;
    PauserRemoved(account?: string | null): PauserRemovedEventFilter;

    "TokensPurchased(address,address,uint256,uint256)"(
      purchaser?: string | null,
      beneficiary?: string | null,
      value?: null,
      amount?: null
    ): TokensPurchasedEventFilter;
    TokensPurchased(
      purchaser?: string | null,
      beneficiary?: string | null,
      value?: null,
      amount?: null
    ): TokensPurchasedEventFilter;
  };

  estimateGas: {
    resume(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ended(overrides?: CallOverrides): Promise<BigNumber>;

    _price(overrides?: CallOverrides): Promise<BigNumber>;

    enabled(overrides?: CallOverrides): Promise<BigNumber>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    disable(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pauseICO(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    weiRaised(overrides?: CallOverrides): Promise<BigNumber>;

    isPauser(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    _updater(overrides?: CallOverrides): Promise<BigNumber>;

    wallet(overrides?: CallOverrides): Promise<BigNumber>;

    updateETHUSDRate(
      newETHUSDRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    unpauseICO(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renouncePauser(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ETHUSD(overrides?: CallOverrides): Promise<BigNumber>;

    addPauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    enable(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ethusdRate(overrides?: CallOverrides): Promise<BigNumber>;

    buyTokens(
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    end(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    resume(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ended(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _price(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    enabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    disable(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pauseICO(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    weiRaised(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPauser(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _updater(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateETHUSDRate(
      newETHUSDRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpauseICO(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renouncePauser(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ETHUSD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addPauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    enable(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ethusdRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyTokens(
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    end(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

// contracts/SimpleCrowdsale.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.5.5;

import "@openzeppelin/contracts/crowdsale/Crowdsale.sol";
import "@openzeppelin/contracts/lifecycle/Pausable.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";

/**
 * @title SimpleCrowdsale
 * @dev This is an example of a fully fledged crowdsale.
 */
contract SimpleCrowdsale is Crowdsale, Pausable, Ownable {
    uint public ETHUSD; //pulled from exchange
    uint public _price; // value of USD per token
    address public updater; //the address who is eligible to update the ETH/USD price

    // How many token units a buyer gets per wei.
    // The rate is the conversion between wei and the smallest and indivisible token unit.
    // So, if you are using a rate of 1 with a ERC20Detailed token with 3 decimals called TOK
    // 1 wei will give you 1 unit, or 0.001 TOK.
    uint256 private _rate;

    modifier only(address _address) {
        require(msg.sender == _address);
        _;
    }

    constructor(
        uint256 rate,
        address payable wallet,
        IERC20 token,
        address _updater,
        uint256 price
    ) public Crowdsale(rate, wallet, token) {
        _price = price;
        _rate = rate; //todo fix me
        updater = _updater;
    }

    function pauseICO() public onlyOwner {
        pause();
    }

    function unpauseICO() public onlyOwner {
        unpause();
    }

    function _beforeTokenTransfer(address beneficiary, uint256 weiAmount)
        view
        internal
        whenNotPaused
    {
        super._preValidatePurchase(beneficiary, weiAmount);
    }

    function rate() public view returns (uint256) {
        return _rate;
    }

    /**
     * @dev Override to extend the way in which ether is converted to tokens.
     * @param weiAmount Value in wei to be converted into tokens
     * @return Number of tokens that can be purchased with the specified _weiAmount
     */
    function _getTokenAmount(uint256 weiAmount) internal view returns (uint256) {
        return weiAmount.mul(_rate);
    }


    function ethusdRate() public view returns (uint256) {
        return ETHUSD;
    }

    // Update current ETHUSD price.
    // Calculates the rate
    function updateETHUSDRate(uint newETHUSDRate) only(updater) public {
        require(msg.sender == updater);
        require(newETHUSDRate != 0);
        ETHUSD = newETHUSDRate;
        _rate = ETHUSD * 10**uint(18) * _price;
    }

}
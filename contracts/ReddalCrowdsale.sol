// contracts/ReddalCrowdsale.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.5.5;

import "openzeppelin2/crowdsale/Crowdsale.sol";
import "openzeppelin2/lifecycle/Pausable.sol";
import "openzeppelin2/ownership/Ownable.sol";
import "openzeppelin2/access/Roles.sol";

/**
 * @title ReddalCrowdsale
 */
contract ReddalCrowdsale is Crowdsale, Pausable, Ownable {
    using Roles for Roles.Role;

    Roles.Role private _enablers;
    Roles.Role private _finishers;

    uint public ETHUSD; //pulled from exchange
    uint public _price; // value of USD per token
    address public _updater; //the address who is eligible to update the ETH/USD price

    // How many token units a buyer gets per wei.
    uint256 private _rate;

    // Describes if Crowdsale is enabled (started)
    bool private _enabled;

    // Describes if Crowdsale finished (ended)
    bool private _ended;


    modifier only(address _address) {
        require(msg.sender == _address);
        _;
    }

    constructor(
        uint256 rate,
        address payable wallet,
        IERC20 token,
        address updater,
        uint256 price,
        address enabler,
        address finisher
) public Crowdsale(rate, wallet, token) {
        _price = price;
        _rate = rate; //TODO use the same calculation as in updateETHUSDRate()
        _updater = updater;
        _enabled = true;
        _ended = false;
        _enablers.add(enabler);
        _finishers.add(finisher);
    }

    function pauseICO() public onlyOwner {
        pause();
    }

    function unpauseICO() public onlyOwner {
        unpause();
    }

    function _preValidatePurchase(address beneficiary, uint256 weiAmount)
        view
        internal
        whenNotPaused
        whenEnabled
        whenActive
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

    /**
     * Updates the _rate value calculating the exchange rate between ETH and Reddal using the ETH to USD rate
     * @param newETHUSDRate ETH to USD rate to be used in the calculation of the exchanges during the crowdsale
     */
    function updateETHUSDRate(uint newETHUSDRate) only(_updater) public {
        require(msg.sender == _updater);
        require(newETHUSDRate != 0);
        ETHUSD = newETHUSDRate;
        _rate = ETHUSD * _price;
    }

    /**
    * @dev Emitted when the enable is triggered by a enabler (`account`).
     */
    event Enabled(address account);

    /**
     * @dev Emitted when the enable is lifted by a enabler (`account`).
     */
    event Stopped(address account);

    /**
    * @dev Emitted when the crowdsale is ended a enabler (`account`).
     */
    event Ended(address account);

    /**
    * @dev Emitted when the crowdsale is resumed a enabler (`account`).
     */
    event Resume(address account);

    /**
     * @dev Returns true if the contract is enabled, and false otherwise.
     */
    function enabled() public view returns (bool) {
        return _enabled;
    }

    /**
    * @dev Returns true if the contract is enabled, and false otherwise.
     */
    function ended() public view returns (bool) {
        return _ended;
    }

    /**
     * @dev Modifier to make a function callable only when the contract is enabled.
     */
    modifier whenEnabled() {
        require(_enabled, "Enabled: enabled");
        _;
    }

    /**
     * @dev Modifier to make a function callable only when the contract is paused.
     */
    modifier whenNotEnabled() {
        require(!_enabled, "Enabled: not enabled");
        _;
    }


    /**
     * @dev Modifier to make a function callable only when the contract is enabled.
     */
    modifier whenActive() {
        require(!_ended, "Active: not active");
        _;
    }


    /**
     * @dev Modifier to make a function callable only when the contract is enabled.
     */
    modifier whenEnded() {
        require(_ended, "Active: active");
        _;
    }

    /**
     * @dev Called by a enabler to enable, starts the crowdsale.
     */
    function enable() public whenNotEnabled {
        require(_enablers.has(msg.sender), "DOES_NOT_HAVE_ENABLER_ROLE");
        _enabled = true;
        emit Enabled(_msgSender());
    }

    /**
     * @dev Called by a enabler to stop the crowdsale, returns to non active state.
     */
    function disable() public whenEnabled {
        require(_enablers.has(msg.sender), "DOES_NOT_HAVE_ENABLER_ROLE");
        _enabled = false;
        emit Stopped(_msgSender());
    }

    /**
    * @dev Called by a enabler to stop the crowdsale, returns to non active state.
     */
    function end() public whenActive {
        require(_enablers.has(msg.sender), "DOES_NOT_HAVE_ENABLER_ROLE");
        _ended = true;
        emit Ended(_msgSender());
    }

    /**
    * @dev Called by a enabler to resume the crowdsale, returns to non active state.
     */
    function resume() public whenEnded {
        require(_enablers.has(msg.sender), "DOES_NOT_HAVE_ENABLER_ROLE");
        _ended = false;
        emit Resume(_msgSender());
    }
}
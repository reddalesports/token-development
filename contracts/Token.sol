// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "openzeppelin4/token/ERC20/ERC20.sol";
import "openzeppelin4/security/Pausable.sol";
import "openzeppelin4/access/Ownable.sol";

contract Reddal is ERC20, Pausable, Ownable {
    constructor() ERC20("Reddal", "REDDAL") {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
    internal
    whenNotPaused
    override
    {
        super._beforeTokenTransfer(from, to, amount);
    }
}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DepositEscrow is Ownable {
    uint depositAmount;                          /// @notice The amount of tokens to deposit
    address depositTokenAddress;                 /// @notice The address of the token to deposit
    mapping(address => bool) public deposits;    /// @notice Whether a deposit has been made
    mapping(address => string) public nicknames; /// @notice The nickname of the depositor

    error DepositAlreadyMade();

    constructior(
        uint _depositAmount,
        address _depositTokenAddress
    ) {
        depositAmount = _depositAmount;
        depositTokenAddress = _depositTokenAddress;
    }

    // Deposit function with nickname
    function deposit(string calldata nickname) public {
        if (deposits[msg.sender]) revert DepositAlreadyMade();

        IERC20(depositTokenAddress).transferFrom(msg.sender, address(this), depositAmount);
        deposits[msg.sender] = true;
        nicknames[msg.sender] = nickname;
    }

    // Admin withdraw function to release all deposits

    // Safe Smart Account with multisig on using funds.
        // Able to use Gnosis Pay Card

}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DepositEscrow is Ownable {
    uint public depositAmount;                        /// @notice The amount of tokens to deposit
    address public depositTokenAddress;               /// @notice The address of the token to deposit
    mapping(address => bool) public deposits;         /// @notice Whether a deposit has been made
    mapping(address => bool) public depositWithdrawn; /// @notice Whether a deposit has been withdrawn
    mapping(address => string) public nicknames;      /// @notice The nickname of the depositor
    bool public fundsReleased;                        /// @notice Whether the funds have been released

    error DepositAlreadyMade();
    error FundsNotReleased();

    constructor(
        uint _depositAmount,
        address _depositTokenAddress
    ) {
        depositAmount = _depositAmount;
        depositTokenAddress = _depositTokenAddress;
    }

    /// @notice Deposit function with nickname
    function deposit(string calldata nickname) public {
        if (deposits[msg.sender]) revert DepositAlreadyMade();

        IERC20(depositTokenAddress).transferFrom(msg.sender, address(this), depositAmount);
        deposits[msg.sender] = true;
        nicknames[msg.sender] = nickname;
    }

    /// @notice Withdraw function for user to claim their deposit
    function withdraw() public {
        if (fundsReleased == false) revert FundsNotReleased();
        if (!deposits[msg.sender]) revert DepositAlreadyMade();

        IERC20(depositTokenAddress).transfer(msg.sender, depositAmount);
        depositWithdrawn[msg.sender] = true;
    }

    /// @notice Admin withdraw function to release all deposits
    function releaseDeposits() public onlyOwner {
        fundsReleased = true;
    }

    // Safe Smart Account with multisig on using funds.
        // Able to use Gnosis Pay Card

}
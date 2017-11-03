pragma solidity ^0.4.17;

import "./ConvertLib.sol";

contract TokenCoin {
    mapping (address => uint) balances;

    function TokenCoin() public {
        balances[tx.origin] = 10000;
    }

    function sendCoin(address receiver, uint amount) public returns(bool sufficient) {
        if (balances[msg.sender] < amount) return false;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        return true;
    }

    function getBalanceInEth(address addr) public returns(uint) {
        return ConvertLib.convert(getBalance(addr), 2);
    }

    function getBalance(address addr) public returns(uint) {
        return balances[addr];
    }
}
pragma solidity ^0.4.17;

import "./ConvertLib.sol";

contract TokenCoin {
    mapping (address => unit) balances;

    function TokenCoin() {
        balances[tx.origin] = 10000;
    }

    function sendCoin(address receiver, unit amount) returns(bool sufficient) {
        if (balances[msg.sender] < amount) return false;
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        return true;
    }

    function getBalanceInEth(address addr) returns(unit) {
        return ConvertLib.convert(getBalance(addr), 2);
    }

    function getBalance(address addr) returns(unit) {
        return balances[addr];
    }
}
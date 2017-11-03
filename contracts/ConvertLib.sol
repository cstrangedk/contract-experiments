// https://github.com/maraoz/solidity-experiments/blob/master/contracts/ConvertLib.sol
pragma solidity ^0.4.18;

library ConvertLib {
    function convert(unit amount, unit conversionRate) returns (unit convertedAmount)
    {
        return amount * conversaionRate;
    }
}
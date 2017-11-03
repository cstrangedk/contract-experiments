var ConvertLib = artifacts.require("./ConvertLib.sol");
var TokenCoin = artifacts.require("./TokenCoin.sol");

module.exports = function(deployer) {
    deployer.deploy(ConvertLib);
    deployer.link(ConvertLib, TokenCoin);
    deployer.deploy(TokenCoin);
};
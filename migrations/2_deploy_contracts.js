var ConvertLib = artifacts.require("./ConvertLib.sol");
var TokenCoin = artifacts.require("./TokenCoin.sol");
var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
    deployer.deploy(SimpleStorage);
    deployer.deploy(ConvertLib);
    deployer.link(ConvertLib, TokenCoin);
    deployer.deploy(TokenCoin);
};
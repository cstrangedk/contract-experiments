var TokenCoin = artifacts.require("TokenCoin");

contract ('TokenCoin', function(accounts) {
    it('should put 10000 TokenCoin in the first account', function() {
        return TokenCoin.deployed().then(function(instance) {
            return instance.getBalance.call(accounts[0]);
        }).then(function(balance) {
            assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
        });
    });
    it("should send coin correctly", function() {
        var meta;

        var account_one = accounts[0];
        var account_two = accounts[1];

        var account_one_starting_balance;
        var account_two_starting_balanace;
        var account_one_ending_balance;
        var account_two_ending_balance;

        var amount = 10;

        return TokenCoin.deployed().then(function(instance) {
            meta = instance;
            return meta.getBalance.call(account_one);
        }).then(function(balance) {
            account_one_starting_balance = balance.toNumber();
            return meta.getBalance.call(account_two);
        }).then(function(balance) {
            account_two_starting_balanace = balance.toNumber();
            return meta.sendCoin(account_two, amount, {from: account_one});
        }).then(function() {
            return meta.getBalance.call(account_one);
        }).then(function(balance) {
            account_one_ending_balance = balance.toNumber();
            return meta.getBalance.call(account_two);
        }).then(function(balance) {
            account_two_ending_balance = balance.toNumber();

            assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount was not correctly token from the sender");
            assert.equal(account_two_ending_balance, account_two_starting_balanace + amount, "Amount was not correctly sent to the receiver");
        });
    });
});
var SimpleStorage = artifacts.require("SimpleStorage");

contract ('SimpleStorage', function(accounts) {
    it('should put 27 in the storage', function() {
        return SimpleStorage.deployed().then(function(instance) {
            SimpleStorageInstance = instance;

            return SimpleStorageInstance.set(27, {from: accounts[0]});
        }).then(function() {
            return SimpleStorageInstance.get.call();
        }).then(function(storedData) {
            assert.equal(storedData, 27, "27 was not stored");
        });
    });
});
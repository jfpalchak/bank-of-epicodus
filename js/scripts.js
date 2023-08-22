function Account(initialDeposit) {
    this.balance = initialDeposit;
}

Account.prototype.deposit() = function() {
    return this.balance;
}
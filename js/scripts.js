function Account(initialDeposit) {
    this.balance = initialDeposit;
}

Account.prototype.deposit() = function(depositAmount) {
    this.balance += depositAmount;
}
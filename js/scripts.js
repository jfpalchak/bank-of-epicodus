function BankBook() {
    this.accounts = {}
}

function Account(initialDeposit) {
    this.balance = initialDeposit;
}

Account.prototype.deposit() = function(depositAmount) {
    this.balance += depositAmount;
}

Account.prototype.withdraw() = function(withdrawAmount) {
    this.balance -= withdrawAmount;
}

let sampleAccount = new Account(0);

window.addEventListener("load", formLoader);

function formLoader() {
    let accountCreationForm = document.getElementById("create-account-form");
    let accountBalanceChangingForm = document.getElementById("account-balance-update-form");

    accountCreationForm.addEventListener("submit", accountCreationFormSubmissionHandler);
    accountBalanceChangingForm.addEventListener("submit", accountUpdateFormSubmissionHandler);
}

function accountCreationFormSubmissionHandler(event) {
    event.preventDefault();
    // grab user form input on account creation -- specifically init. deposit
    // call account.deposit, passing in init. deposit.
    // display current balance.
}

function accountUpdateFormSubmissionHandler(event) {
    event.preventDefault();
}
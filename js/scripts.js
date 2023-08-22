function BankBook() {
    this.accounts = {}
    this.currentId = 0;
}

BankBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

BankBook.prototype.addAccount = function(account) {
    account.id = this.assignId();
    this.accounts[account.id] = account;
}

BankBook.prototype.findAccount = function(id) {
    if (this.accounts[id] === undefined) {
        return false;
    }
    return this.accounts[id];
}

function Account(name, initialDeposit) {
    this.ownerName = name;
    this.balance = initialDeposit;
}

Account.prototype.deposit = function(depositAmount) {
    this.balance += depositAmount;
}

Account.prototype.withdraw = function(withdrawAmount) {
    this.balance -= withdrawAmount;
}

const epicodusBank = new BankBook();

window.addEventListener("load", formLoader);

function formLoader() {
    let accountCreationForm = document.getElementById("create-account-form");
    let accountBalanceChangingForm = document.getElementById("account-balance-update-form");

    accountCreationForm.addEventListener("submit", accountCreationFormSubmissionHandler);
    accountBalanceChangingForm.addEventListener("submit", accountUpdateFormSubmissionHandler);
}

function displayAllAccounts(epicodusBank) {

    let ulElement = document.createElement("ul");

    Object.keys(epicodusBank.accounts).forEach(function(key) {
        const account = epicodusBank.findAccount(key);
        let liElement = document.createElement("li");
        liElement.append(account.ownerName);
        ulElement.append(liElement);
    });
    document.getElementById("display-accounts").append(ulElement);

}

function displayCurrentBalance(currentAccount) {
    epicodusBank.addAccount(currentAccount);

    const p = document.querySelector('p');
    p.append(currentAccount.balance);
}

function accountCreationFormSubmissionHandler(event) {
    event.preventDefault();
    // grab user form input on account creation -- specifically init. deposit
    const newName = document.getElementById('account-name').value;
    const initialDeposit = document.getElementById('account-initial-deposit').value;

    const newAccount = new Account(newName, initialDeposit);
    displayAllAccounts(epicodusBank);
    displayCurrentBalance(newAccount);
}

function accountUpdateFormSubmissionHandler(event) {
    event.preventDefault();


}
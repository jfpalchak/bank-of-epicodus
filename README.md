
**Description:** Account()

```javascript
Test 1: "Constructor function creates empty object of type Account."
Code:
    const account = new Account();
    account;
Expected Output: Account {}

Test 2: "Constructor function creates object of type Account with balance property set to parameter initialDeposit."
Code:
    const initialDeposit = 500;
    const account = new Account(initialDeposit);
    account;
Expected Output: Account {balance: 500}
```

**Description:** Account.prototype.deposit()

```javascript
Test 1: "Returns the Account object's balance."
Code:
    const initialDeposit = 500;
    const account = new Account(initialDeposit);
    account.deposit();
Expected Output: 500

Test 2: "It should return the sum of Account object's balance and the inputted value."
Code:
    const initialDeposit = 500;
    const account = new Account(initialDeposit);
    account.deposit(100);
Expected Output: 600
```

**Description:** Account.prototype.withdraw()

```javascript
Test 1: "Returns the Account object's balance."
Code:
    const initialDeposit = 500;
    const account = new Account(initialDeposit);
    account.withdraw();
Expected Output: 500

Test 2: "It should return the difference of Account object's balance and the inputted value."
Code:
    const initialDeposit = 500;
    const account = new Account(initialDeposit);
    account.deposit(100);
Expected Output: 400
```

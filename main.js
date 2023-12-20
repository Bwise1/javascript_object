let bankAccount = {
  accountName: "Garry Willis",
  accountNumber: "TR11122345555586970784743",
  accountBalance: 20000,
  accountType: "TRY",
  routingNumber: 23498094332,

  displayBalance: function () {
    console.log(`Your account balance is: ${this.accountBalance}`);
  },

  displayAccountNumber: function () {
    console.log(`Your account number is: ${this.accountNumber}`);
  },

  withdraw: function (amount) {
    if (amount <= this.accountBalance) {
      this.accountBalance = this.accountBalance - amount;
      console.log(
        `${this.accountType}${amount} withdrawn: new balance: ${this.accountBalance}`
      );
    } else {
      console.log("Insufficient funds!");
    }
  },

  deposit: function (amount) {
    this.accountBalance = this.accountBalance + amount;
    console.log(
      `${this.accountType}${amount} Deposited: new balance: ${this.accountBalance}`
    );
  },
};

bankAccount.displayBalance();
bankAccount.withdraw(2000);
bankAccount.displayBalance();
bankAccount.withdraw(200000);
bankAccount.deposit(4000);
bankAccount.displayAccountNumber();

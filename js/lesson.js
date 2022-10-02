const Operation = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withfraw',
};

const account = {
  balance: 0,
  allTransactions: [{ amount: 1000, type: 'deposit', id: 1664136205658 }],

  createTransaction(amount, type) {
    const transaction = {
      amount,
      type,
      id: Date.now(),
    };
    return transaction;
  },

  deposit(amount) {
    const transaction = this.createTransaction(amount, Operation.DEPOSIT);
    this.allTransactions.push(transaction);
    this.balance += amount;
  },

  withdraw(amount) {
    if (this.balance < amount) {
      console.log('недостатньо коштів');
      return;
    }

    const transaction = this.createTransaction(amount, Operation.WITHDRAW);
    this.allTransactions.push(transaction);
    this.balance -= amount;
  },

  getBalance() {
    console.log(this.balance);
  },

  getTransactionDetails(id) {
    for (const transaction of this.allTransactions) {
      console.log();
      if (transaction.id === id) {
        console.log(transaction);
      }
    }
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.allTransactions) {
      console.log(transaction);
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

account.deposit(1000);
account.deposit(1000);
account.deposit(1000);
account.deposit(1000);
account.deposit(1000);
account.deposit(1000);
account.withdraw(1000);
account.withdraw(2000);
account.withdraw(1000);

// account.getBalance();
setTimeout(() => {}, 200);
console.log(account);
account.getTransactionDetails(1664136205658);
console.log(account.getTransactionTotal(Operation.DEPOSIT));
console.log(account.getTransactionTotal(Operation.WITHDRAW));

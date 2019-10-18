export class JsTPS {
  constructor() {
    this.transactionArray = [];
    this.mostRecentTransaction = -1;
    this.performingDo = false;
    this.perfomingUndo = false;
  }

  isPerfomingDo() {
    return this.performingDo;
  }

  isPerfomingUndo() {
    return this.performingUndo;
  }

  getSize() {
    return this.transactionArray.length;
  }

  getRedoSize() {
    return this.transactionArray.length - this.mostRecentTransaction - 1;
  }

  getUndoSize() {
    return this.mostRecentTransaction + 1;
  }

  hasTransactionToUndo() {
    return this.mostRecentTransaction >= 0;
  }

  hasTransactionToRedo() {
    return this.mostRecentTransaction < this.transactionArray.length - 1;
  }

  clearAllTransactions() {
    this.transactionArray.splice(0, this.transactionArray.length);
    this.mostRecentTransaction = -1;
  }

  undoTransaction() {
    let singleTransaction;
    if (this.hasTransactionToUndo()) {
      this.performingUndo = true;
      singleTransaction = this.transactionArray[this.mostRecentTransaction];
      singleTransaction.undoTransaction();
      this.mostRecentTransaction--;
      this.performingUndo = false;
    }
  }

  doTransaction() {
    let singleTransaction;
    if (this.hasTransactionToRedo()) {
      this.performingDo = true;
      singleTransaction = this.transactionArray[this.mostRecentTransaction + 1];
      //singleTransaction.doTransaction();
      this.mostRecentTransaction++;
      this.performingDo = false;
    }
  }

  addTransaction(transactionToAdd) {
    if (
      this.mostRecentTransaction < 0 ||
      this.mostRecentTransaction < this.transactionArray.length - 1
    ) {
      for (
        let i = this.transactionArray.length - 1;
        i > this.mostRecentTransaction;
        i--
      ) {
        this.transactionArray.splice(i, 1);
      }
    }

    this.transactionArray.push(transactionToAdd);

    this.doTransaction();
  }

  peekUndo() {
    if (this.hasTransactionToUndo()) {
      return this.transactionArray[this.mostRecentTransaction];
    } else {
      return null;
    }
  }

  peekDo() {
    if (this.hasTransactionToRedo()) {
      return this.transactionArray[this.mostRecentTransaction + 1];
    } else {
      return null;
    }
  }

  toString() {
    let text =
      "--Number of Transactions: " + this.transactionArray.length + "\n";
    text += "--Current Index on Stack: " + this.mostRecentTransaction + "\n";
    text += "--Current Transaction Stack:\n";
    for (let i = 0; i <= this.mostRecentTransaction; i++) {
      let jx = this.transactionArray[i];
      text += "----" + jx.toString() + "\n";
    }
  }
}

export default JsTPS;

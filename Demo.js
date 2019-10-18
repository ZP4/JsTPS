class Num {
  constructor() {
    this.num = 0;
  }

  setNum(numberToSet) {
    this.num = numberToSet;
  }

  getNum() {
    return this.num;
  }

  andMask(mask) {
    this.num = this.num & mask;
  }

  orMask(mask) {
    this.num = this.num | mask;
  }
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

class OrMask_Transaction {
  constructor(initNum, initIntNum, initMask) {
    this.num = initNum;
    this.intNum = initIntNum;
    this.mask = initMask;
  }

  doTransaction() {
    this.num.orMask(this.mask);
  }

  undoTransaction() {
    this.num.setNum(this.intNum);
  }

  toString() {
    return "OR MASK " + this.mask;
  }
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

class AndMask_Transaction {
  constructor(initNum, initIntNum, initMask) {
    this.num = initNum;
    this.intNum = initIntNum;
    this.mask = initMask;
  }

  doTransaction() {
    this.num.andMask(this.mask);
  }

  undoTransaction() {
    this.num.setNum(this.intNum);
  }

  toString() {
    return "AND MASK " + this.mask;
  }
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

class AddToNum_Transaction {
  constructor(initNum, initAmountToAdd) {
    this.num = initNum;
    this.amountToAdd = initAmountToAdd;
  }

  doTransaction() {
    let oldNum = this.num.getNum();
    let newNum = oldNum + this.amountToAdd;
    this.num.setNum(newNum);
  }

  undoTransaction() {
    let oldNum = this.num.getNum();
    let newNum = oldNum - this.amountToAdd;
    this.num.setNum(newNum);
  }

  toString() {
    return "ADD " + this.amountToAdd;
  }
}

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

class jsTPS_Tester {
  constructor() {}

  static main() {
    let keepGoing = true;
    while (keepGoing) {
      console.log("CURRENT JsTPS");
    }
  }
}

export { Num, OrMask_Transaction, AndMask_Transaction, AddToNum_Transaction };

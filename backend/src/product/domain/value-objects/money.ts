//generate money value object for product without any libs
class Money {
  constructor(public amount: number, public currency: string) {}

  add(money: Money): Money {
    if (this.currency !== money.currency) {
      throw new Error('Currency mismatch');
    }
    return new Money(this.amount + money.amount, this.currency);
  }

  subtract(money: Money): Money {
    if (this.currency !== money.currency) {
      throw new Error('Currency mismatch');
    }
    return new Money(this.amount - money.amount, this.currency);
  }

  multiply(factor: number): Money {
    return new Money(this.amount * factor, this.currency);
  }

  divide(divisor: number): Money {
    if (divisor === 0) {
      throw new Error('Division by zero');
    }
    return new Money(this.amount / divisor, this.currency);
  }

  toString(): string {
    return `${this.amount} ${this.currency}`;
  }
}
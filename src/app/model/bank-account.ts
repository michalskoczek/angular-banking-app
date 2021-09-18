// export class BankAccount {
//    public constructor(
//       private readonly _name: string,
//       private readonly _accountNumber: number,
//    ){}

//    public get name(): string {
//       return this._name
//    }

//    public get accountNumber(): number {
//       return this._accountNumber;
//    }
// }

export class AccountNumber {
  private constructor(private value: string) {}

  static form(value: string) {
    if (value.length !== 26) {
      throw new Error('Inproper account number length!');
    }
    return new AccountNumber(value);
  }

  get valueOf() {
    return this.value;
  }
}

// type AccountNumber = string & { readonly type: unique symbol };

export interface BankAccount {
  name: string;
  number: AccountNumber;
}

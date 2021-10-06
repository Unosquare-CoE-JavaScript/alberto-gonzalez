class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);

  }
}

const accounting = new Department('Accounting');
accounting.describe()

const accoutingCopy = { name: 's', describe: accounting.describe }
accoutingCopy.describe()
class Department {
  name: string;
  private employees: string[] = []

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

}

const accounting = new Department('Accounting');
accounting.describe()
accounting.addEmployee('Max')
accounting.addEmployee('Manu')
accounting.printEmployeeInformation()

// const accoutingCopy = { name: 's', describe: accounting.describe }
// accoutingCopy.describe()
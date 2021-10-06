class Department {

  // private id: string;
  // private name: string;
  private employees: string[] = []

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
    // this.id = id;
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT')
  }
}
class AccoutingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
  }

  addReport(text: string) {
    this.reports.push(text)
  }

  printReports() {
    console.log(this.reports);

  }

}



const accounting = new Department('d1', 'Accounting');
accounting.describe()
accounting.addEmployee('Max')
accounting.addEmployee('Manu')
accounting.printEmployeeInformation()

// const accoutingCopy = { name: 's', describe: accounting.describe }
// accoutingCopy.describe()
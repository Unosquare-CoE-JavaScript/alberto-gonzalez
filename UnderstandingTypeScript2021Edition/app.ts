class Department {

  static fiscalYear = 2021
  // private id: string;
  // private name: string;
  protected employees: string[] = []

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
    // this.id = id;
  }

  static createEmployee(name: string) {
    return { name: name }
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
  private lastReport: string;
  private static instance: AccoutingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.')
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!')
    }
    this.addReport(value)
  }

  static getInstance() {
    if (AccoutingDepartment.instance) {
      return this.instance
    }
    this.instance = new AccoutingDepartment('d2', [])
    return this.instance;
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
    this.lastReport = reports[0]
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return
    }
    this.employees.push(name)
  }

}

const employee1 = Department.createEmployee('Max')

const accounting = AccoutingDepartment.getInstance();
accounting.describe()
accounting.addEmployee('Max')
accounting.addEmployee('Manu')
accounting.printEmployeeInformation()

// const accoutingCopy = { name: 's', describe: accounting.describe }
// accoutingCopy.describe()
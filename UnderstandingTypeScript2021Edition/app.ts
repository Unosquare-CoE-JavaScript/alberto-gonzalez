type Admin = {
  name: string;
  privileges: string[]
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

type UnknowEmployee = Employee | Admin;
function printEployeeInformation(emp: UnknowEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privililegs: ' + emp.privileges);

  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);

  }

}

printEployeeInformation({ name: 'Manu', startDate: new Date() })

class Car {
  drive() {
    console.log('Driving');

  }
}

class Truck {
  drive() {
    console.log('Driving a truck.');

  }
  loadCargo(amount: number) {
    console.log('Loading cargo...');

  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(10)
  }
}

useVehicle(v1);
useVehicle(v2)
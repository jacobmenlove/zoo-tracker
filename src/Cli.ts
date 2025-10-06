import inquirer from 'inquirer';
import { Animal } from './classes/Animal.js';
import { Employee } from './classes/Employee.js';
import { ZooKeeper } from './classes/ZooKeeper.js';
import { ZooWorker } from './classes/ZooWorker.js';

export class Cli {
    animals: Animal[];
    employees: Employee[];

    constructor(animals: Animal[], employees: Employee[]) {
        this.animals = animals;
        this.employees = employees;
    }

    startCli(): void {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'action',
                    message: 'What would you like to do?',
                    choices: [
                        'Add Animal',
                        'Add ZooKeeper',
                        'Add ZooWorker',
                        'View Animals',
                        'View Employees',
                        'Feed Animals',
                        'Pay Employees',
                        'Exit'
                    ]
                }
            ])
            .then((answers) => {
                switch (answers.action) {
                    case 'Add Animal':
                        this.startAnimalCli();
                        break;
                    case 'Add ZooKeeper':
                        this.startZooKeeperCli();
                        break;
                    case 'Add ZooWorker':
                        this.startEmployeeCli();
                        break;
                    case 'View Animals':
                        this.viewAnimals();
                        break;
                    case 'View Employees':
                        this.viewEmployees();
                        break;
                    case 'Feed Animals':
                        this.feedAnimals();
                        break;
                    case 'Pay Employees':
                        this.payEmployees();
                        break;
                    case 'Exit':
                        console.log('Goodbye!');
                        process.exit(0);
                }
            });
    }

    startAnimalCli(): void {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'species',
                    message: 'Enter the animal species:'
                },
                {
                    type: 'confirm',
                    name: 'hungry',
                    message: 'Is the animal hungry?',
                    default: false
                },
                {
                    type: 'number',
                    name: 'weight',
                    message: 'Enter the animal weight (in lbs):'
                },
                {
                    type: 'number',
                    name: 'amount',
                    message: 'How many of this species are in the zoo?'
                }
            ])
            .then((answers) => {
                const newAnimal = new Animal(
                    answers.species,
                    answers.hungry,
                    answers.weight,
                    answers.amount
                );
                this.animals.push(newAnimal);
                console.log(`\n✅ ${answers.species} added to the zoo!`);
                console.log(`📊 Total animals in zoo: ${this.animals.length}\n`);
                this.startCli();
            });
    }

    startZooKeeperCli(): void {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter the ZooKeeper name:'
                },
                {
                    type: 'number',
                    name: 'id',
                    message: 'Enter the employee ID:'
                },
                {
                    type: 'number',
                    name: 'salary',
                    message: 'Enter the salary:'
                }
            ])
            .then((answers) => {
                const newZooKeeper = new ZooKeeper(
                    answers.name,
                    answers.id,
                    answers.salary
                );
                this.employees.push(newZooKeeper);
                console.log(`\n✅ ZooKeeper ${answers.name} added!\n`);
                this.startCli();
            });
    }

    startEmployeeCli(): void {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter the ZooWorker name:'
                },
                {
                    type: 'number',
                    name: 'id',
                    message: 'Enter the employee ID:'
                },
                {
                    type: 'number',
                    name: 'salary',
                    message: 'Enter the salary:'
                }
            ])
            .then((answers) => {
                const newZooWorker = new ZooWorker(
                    answers.name,
                    answers.id,
                    answers.salary
                );
                this.employees.push(newZooWorker);
                console.log(`\n✅ ZooWorker ${answers.name} added!\n`);
                this.startCli();
            });
    }

    viewAnimals(): void {
        if (this.animals.length === 0) {
            console.log('\n❌ No animals in the zoo yet.\n');
        } else {
            console.log('\n🦁 Animals in the Zoo:\n');
            this.animals.forEach((animal) => {
                console.log(animal.makeRollCall());
            });
            console.log();
        }
        this.startCli();
    }

    viewEmployees(): void {
        if (this.employees.length === 0) {
            console.log('\n❌ No employees registered yet.\n');
        } else {
            console.log('\n👥 Zoo Employees:\n');
            this.employees.forEach((employee) => {
                console.log(`${employee.name} - ${employee.title} (ID: ${employee.id})`);
            });
            console.log();
        }
        this.startCli();
    }

    feedAnimals(): void {
        if (this.animals.length === 0) {
            console.log('\n❌ No animals to feed.\n');
        } else {
            console.log('\n🍖 Feeding Animals:\n');
            this.animals.forEach((animal) => {
                if (animal.hungry) {
                    console.log(`${animal.species} will be fed.`);
                } else {
                    console.log(`${animal.species} is not hungry.`);
                }
            });
            console.log();
        }
        this.startCli();
    }

    payEmployees(): void {
        if (this.employees.length === 0) {
            console.log('\n❌ No employees to pay.\n');
        } else {
            console.log('\n💰 Paying Employees:\n');
            this.employees.forEach((employee) => {
                if (employee.name) {
                    const payment = employee.receivePay(employee.salary);
                    console.log(`${employee.name} is paid $${payment}.`);
                }
            });
            console.log();
        }
        this.startCli();
    }
}
import { Employee } from './Employee.js';

export class ZooKeeper extends Employee {
    constructor(name: string, id: number, salary: number) {
        super(name, id, 'ZooKeeper', salary);
    }

    feedAnimals(): void {
        console.log(`${this.name} is feeding the animals.`);
    }
}
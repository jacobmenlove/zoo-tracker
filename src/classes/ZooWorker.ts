import { Employee } from './Employee.js';

export class ZooWorker extends Employee {
    constructor(name: string, id: number, salary: number) {
        super(name, id, 'ZooWorker', salary);
    }

    cleanEnclosure(): void {
        console.log(`${this.name} is cleaning the enclosure.`);
    }
}
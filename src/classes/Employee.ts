import { Work } from '../interfaces/Work.js';

export class Employee implements Work {
    name: string;
    id: number;
    title: string;
    salary: number;

    constructor(name: string, id: number, title: string, salary: number) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.salary = salary;
    }

    receivePay(pay: number): number {
        return pay;
    }
}
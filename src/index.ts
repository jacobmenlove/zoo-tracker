import { Cli } from './Cli.js';
import { Animal } from './classes/Animal.js';
import { Employee } from './classes/Employee.js';

const animals: Animal[] = [];
const employees: Employee[] = [];

const cli = new Cli(animals, employees);
cli.startCli();
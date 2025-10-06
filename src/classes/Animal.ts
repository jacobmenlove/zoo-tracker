import { ZooAnimals } from '../interfaces/ZooAnimals.js';

export class Animal implements ZooAnimals {
    species: string;
    hungry: boolean;
    weight: number;
    amount: number;

    constructor(species: string, hungry: boolean, weight: number, amount: number) {
        this.species = species;
        this.hungry = hungry;
        this.weight = weight;
        this.amount = amount;
    }

    makeRollCall(): string {
        const hungerStatus = this.hungry ? 'hungry' : 'not hungry';
        return `There are ${this.amount} ${this.species}(s) in the zoo and they are ${hungerStatus}.`;
    }
}
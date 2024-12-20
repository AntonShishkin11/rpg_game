import { Warrior } from './Warrior.js';
import { Axe } from '../weapons/Axe.js';

export class Dwarf extends Warrior {
    constructor() {
        super();
        this.weapon = new Axe(); // Начальное оружие для дворфа
    }
}
import { Warrior } from './Warrior';
import { Axe } from '../weapons/Axe';

export class Dwart extends Warrior {
    constructor() {
        super();
        this.weapon = new Axe(); // Начальное оружие для дворфа
    }
}
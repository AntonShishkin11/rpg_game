import { Archer } from './Archer.js';
import { LongBow } from '../weapons/LongBow.js';

export class Crossbowman extends Archer {
    constructor() {
        super();
        this.weapon = new LongBow(); // Начальное оружие для арбалетчика
    }

}
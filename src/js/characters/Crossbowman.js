import { Archer } from './Archer';
import { LongBow } from '../weapons/LongBow';

export class Crossbowman extends Archer {
    constructor() {
        super();
        this.weapon = new LongBow(); // Начальное оружие для арбалетчика
    }

}
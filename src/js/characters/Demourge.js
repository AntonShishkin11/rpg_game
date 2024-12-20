import { Mage } from './Mage.js';
import { StormStaff } from '../weapons/StormStaff.js';

export class Demourge extends Mage {
    constructor() {
        super();
        this.weapon = new StormStaff(); // Начальное оружие для демурга (мага)
    }

}
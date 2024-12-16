import { Mage } from './Mage';
import { StormStaff } from '../weapons/StormStaff';

export class Demourge extends Mage {
    constructor() {
        super();
        this.weapon = new StormStaff(); // Начальное оружие для демурга (мага)
    }

}
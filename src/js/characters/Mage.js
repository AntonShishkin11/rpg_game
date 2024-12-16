import { Player } from './Player';
import { Staff } from '../weapons/Staff';

export class Mage extends Player {
    constructor() {
        super();
        this.weapon = new Staff(); // Начальное оружие для мага
    }

}
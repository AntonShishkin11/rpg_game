import { Player } from './Player.js';
import { Staff } from '../weapons/Staff.js';

export class Mage extends Player {
    constructor() {
        super();
        this.weapon = new Staff(); // Начальное оружие для мага
    }

}
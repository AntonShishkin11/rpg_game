import { Player } from './Player.js';
import { Bow } from '../weapons/Bow.js';

export class Archer extends Player {
    constructor() {
        super();
        this.weapon = new Bow(); // Начальное оружие для лучника
    }

}
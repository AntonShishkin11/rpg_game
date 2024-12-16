import { Player } from './Player';
import { Bow } from '../weapons/Bow';

export class Archer extends Player {
    constructor() {
        super();
        this.weapon = new Bow(); // Начальное оружие для лучника
    }

}
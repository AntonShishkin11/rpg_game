import { Player } from './Player.js';
import { Bow } from '../weapons/Bow.js';

export class Archer extends Player {
    constructor(position, name) {
        super(position, name);
        this.life = 80;
        this.magic = 35;
        this.weapon = new Bow();
        this.description = 'Лучник';
    }

}
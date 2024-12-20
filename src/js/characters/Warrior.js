import { Player } from './Player.js';
import { Sword } from '../weapons/Sword.js';

export class Warrior extends Player {
    constructor(position, name) {
        super(position, name);
        this.life = 120;
        this.weapon = new Sword();
        this.description = 'Воин';
    }

}
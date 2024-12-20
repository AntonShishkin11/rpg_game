import { Player } from './Player.js';
import { Sword } from '../weapons/Sword.js';

export class Warrior extends Player {
    constructor() {
        super();
        this.weapon = new Sword(); // Начальное оружие для воина
    }

}
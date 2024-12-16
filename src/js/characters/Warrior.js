import { Player } from './Player';
import { Sword } from '../weapons/Sword';

export class Warrior extends Player {
    constructor() {
        super();
        this.weapon = new Sword(); // Начальное оружие для воина
    }

}
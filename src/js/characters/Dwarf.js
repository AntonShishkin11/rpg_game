import { Warrior } from './Warrior.js';
import { Axe } from '../weapons/Axe.js';

export class Dwarf extends Warrior {
    constructor(position, name) {
        super(position, name);
        this.life = 130; // Увеличиваем жизнь для Гнома
        this.weapon = new Axe(); // Устанавливаем основное оружие (Секира)
        this.description = 'Гном';
    }
}
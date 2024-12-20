import { Sword } from './Sword.js';

export class Axe extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27; // Увеличение атаки
        this.durability = 800; // Увеличенная прочность
    }
}
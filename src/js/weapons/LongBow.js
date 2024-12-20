import { Bow } from './Bow.js';

export class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15; // Увеличение атаки
        this.range = 4;   // Уменьшение дальности
    }
}
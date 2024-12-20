import { Archer } from './Archer.js';
import { LongBow } from '../weapons/LongBow.js';

export class Crossbowman extends Archer {
    constructor(position, name) {
        super(position, name);
        this.life = 85; // Увеличиваем жизнь для Арбалетчика
        this.weapon = new LongBow(); // Устанавливаем основное оружие (Длинный лук)
        this.description = 'Арбалетчик';
    }

}
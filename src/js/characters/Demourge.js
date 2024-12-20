import { Mage } from './Mage.js';
import { StormStaff } from '../weapons/StormStaff.js';

export class Demourge extends Mage {
    constructor(position, name) {
        super(position, name);
        this.life = 80; // Жизнь остается такой же как у Мага
        this.magic = 120; // Увеличиваем магию для Демиурга
        this.weapon = new StormStaff(); // Устанавливаем основное оружие (Посох Бури)
        this.description = 'Демиург';
    }

}
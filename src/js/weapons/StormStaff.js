import { Staff } from './Staff.js';

export class StormStaff extends Staff {
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10; // Увеличение атаки
        this.range = 3;   // Увеличенная дальность
    }
}
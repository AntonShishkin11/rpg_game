import { Arm } from '../weapons/Arm.js';
import { Knife } from '../weapons/Knife.js';

export class Player {
    constructor(position, name) {
        this.life = 100;
        this.magic = 20;
        this.speed = 1;
        this.attack = 10;
        this.agility = 5;
        this.luck = 10;
        this.description = 'Игрок';
        this.weapon = new Arm();
        this.position = position;
        this.name = name;
    }

    getLuck() {
        const randomNumber = Math.floor(Math.random() * 101);
        return (randomNumber + this.luck) / 100; // Коэффициент удачливости
    }

    getDamage(distance) {
        const weaponDamage = this.weapon.getDamage();
        if (distance > this.weapon.range) return 0;
        return (this.attack + weaponDamage) * this.getLuck() / distance; // Сила удара
    }

    takeDamage(damage) {
        this.life = Math.max(0, this.life - damage);
    }

    isDead() {
        return this.life === 0;
    }
}
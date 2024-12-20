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
        const weaponDamage = this.weapon.getDamage(); // Получаем урон от оружия
        if (distance > this.weapon.range) return 0; // Если расстояние больше диапазона, возвращаем 0
        return (this.attack + weaponDamage) * this.getLuck() / distance; // Сила удара
    }


    takeDamage(damage) {
        this.life = Math.max(0, this.life - damage);
    }

    isDead() {
        return this.life === 0;
    }

    moveLeft(distance) {
        const moveDistance = Math.min(distance, this.speed);
        this.position -= moveDistance;
    }

    moveRight(distance) {
        const moveDistance = Math.min(distance, this.speed);
        this.position += moveDistance;
    }

    move(distance) {
        if (distance < 0) {
            this.moveLeft(-distance);
        } else {
            this.moveRight(distance);
        }
    }

    isAttackBlocked() {
        return this.getLuck() > (100 - this.luck) / 100;
    }

    dodged() {
        return this.getLuck() > (100 - this.agility - (this.speed * 3)) / 100;
    }

    takeAttack(damage) {
        if (this.isAttackBlocked()) {
            this.weapon.takeDamage(damage); // Если удар заблокирован, урон идет по оружию
            console.log(`${this.name} заблокировал удар!`);
            return;
        }

        if (this.dodged()) {
            console.log(`${this.name} уклонился от удара!`);
            return; // Уклонение от удара
        }

        this.takeDamage(damage); // Получаем урон
    }

    checkWeapon() {
        if (this.weapon.isBroken()) {
            console.log(`${this.name} меняет оружие!`);
            if (this instanceof Warrior) {
                this.weapon = new Knife();
            } else if (this instanceof Archer) {
                this.weapon = new Knife();
            } else if (this instanceof Mage) {
                this.weapon = new Knife();
            }
            console.log(`Теперь у ${this.name} оружие: ${this.weapon.name}`);
        }
    }

    tryAttack(enemy) {
        const distance = Math.abs(this.position - enemy.position); // Рассчитываем расстояние до врага

        if (distance > this.weapon.range) {
            console.log(`${this.name} не достает до ${enemy.name}!`);
            return; // Атака не засчитывается, если враг слишком далеко
        }

        const luckDamage = 10 * this.getLuck();
        this.weapon.takeDamage(luckDamage); // Наносим износ оружию

        let damage = this.getDamage(distance); // Получаем урон

        if (damage <= 0) {
            console.log(`${this.name} не может нанести урон!`);
            return; // Если урон равен или меньше 0, прекращаем атаку
        }

        if (this.position === enemy.position) {
            damage *= 2; // Удвоенный урон при одинаковом положении
            enemy.moveRight(1); // Отскакивает на одну позицию вправо
            console.log(`${enemy.name} отлетает назад!`);
        }

        enemy.takeAttack(damage); // Наносим урон противнику

        console.log(`${this.name} атакует ${enemy.name} на расстоянии ${distance}, нанося ${damage} урона.`);

        enemy.checkWeapon(); // Проверка состояния оружия после атаки
    }

    turn(players) {
        const enemy = this.chooseEnemy(players);
        this.moveToEnemy(enemy);
        this.tryAttack(enemy);
    }


    chooseEnemy(players) {
        return players.reduce((prev, curr) => (prev.life < curr.life ? prev : curr));
    }


    moveToEnemy(enemy) {
        const distance = Math.abs(this.position - enemy.position);
        if (this.position < enemy.position) {
            this.moveRight(Math.min(this.speed, enemy.position - this.position));
        } else {
            this.moveLeft(Math.min(this.speed, this.position - enemy.position));
        }
    }
}

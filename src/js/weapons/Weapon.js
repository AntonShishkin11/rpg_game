
export class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.initDurability = durability; // Сохраняем первоначальную прочность
        this.range = range;
    }

    takeDamage(damage) {
        this.durability = Math.max(0, this.durability - damage);
    }

    getDamage() {
        if (this.durability <= 0) return 0;

        const durabilityThreshold = this.initDurability * 0.3; // 30% от начальной прочности
        return (this.durability >= durabilityThreshold) ? this.attack : Math.floor(this.attack / 2);
    }

    isBroken() {
        return this.durability === 0;
    }
}
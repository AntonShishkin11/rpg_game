import { Archer } from './characters/Archer.js';
import { Crossbowman } from './characters/Crossbowman.js';
import { Demourge } from './characters/Demourge.js';
import { Dwarf } from './characters/Dwarf.js';
import { Mage } from './characters/Mage.js';
import { Player } from './characters/Player.js';
import { Warrior } from './characters/Warrior.js';
export function play() {

    const characters = [
        new Player(),
        new Archer(),
        new Crossbowman(),
        new Demourge(),
        new Dwarf(),
        new Mage(),
        new Warrior()
    ];
    return {
        characters
    };
}
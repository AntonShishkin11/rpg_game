import { Warrior } from './characters/Warrior.js';
import { Archer } from './characters/Archer.js';
import { Mage } from './characters/Mage.js';

export function play(players) {
    while (players.length > 1) {
        players.forEach(player => {
            if (!player.isDead()) {
                player.turn(players);
            }
        });
        players = players.filter(player => !player.isDead());
        console.log(`Осталось игроков: ${players.length}`);
    }
    console.log(`Победитель: ${players[0].name}`);
}
import './css/style.css';
import {play} from "./js/game.js";
import {Archer} from "./js/characters/Archer.js";
import {Mage} from "./js/characters/Mage.js";
import {Warrior} from "./js/characters/Warrior.js";

// Запуск игры (пока просто вызов функции)
const players = [
    new Archer(2, "Леголас"),
    new Warrior(8, "Алёша Попович"),
    new Mage(4, "Гендальф")
];


function startGame() {
    console.log("Игра началась!");
    play(players);
}

document.getElementById('startGame').addEventListener('click', startGame);

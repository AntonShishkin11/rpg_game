import { Arm } from '../weapons/Arm';
import { Knife } from '../weapons/Knife';

export class Player {
    constructor() {
        this.weapon = new Arm();
        this.secondaryWeapon = new Knife();
    }

}
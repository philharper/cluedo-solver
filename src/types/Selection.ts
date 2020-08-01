import { Game } from "./Game";

export class Selection {

    character!: string;
    room!: string;
    weapon!: string;

    constructor() {
        this.character = Game.CHARACTERS[0]
        this.room = Game.ROOMS[0]
        this.weapon = Game.WEAPONS[0]
    }

}
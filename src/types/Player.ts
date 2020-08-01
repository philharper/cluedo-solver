import { Card } from "./Card";
import { Game } from "./Game";

export default class Player {

    readonly name: string;
    rooms: Card[];
    characters: Card[];
    weapons: Card[];
    constructor(name: string) {
        this.name = name;
        this.rooms = getRooms();
        this.characters = getCharacters();
        this.weapons = getWeapons();
    }
}

function getRooms() {
    var rooms: Card[] = [];
    Game.ROOMS.forEach(room => rooms.push(new Card(room)));
    return rooms;
}

function getCharacters() {
    var characters: Card[] = [];
    Game.CHARACTERS.forEach(character => characters.push(new Card(character)));
    return characters;
}

function getWeapons() {
    var weapons: Card[] = [];
    Game.WEAPONS.forEach(weapon => weapons.push(new Card(weapon)));
    return weapons;
}
import Player from "./Player";

export class Game {

    static ROOMS = ['Kitchen', 'Ball Room', 'Conservatory', 'Dining Room', 'Billiard Room', 'Library', 'Lounge', 'Hall', 'Study'];
    static WEAPONS = ['Candlestick', 'Dagger', 'Lead Pipe', 'Revolver', 'Rope', 'Spanner'];
    static CHARACTERS = ['Miss Scarlett', 'Professor Plum', 'Mrs Peacock', 'Reverend Green', 'Colonel Mustard', 'Mrs White'];

    players: Player[] = [];
    currentPlayer: Player;
    room: string = '';
    weapon: string = '';
    character: string = '';

    constructor(players: Player[]) {
        this.players = players;
        this.currentPlayer = this.players[0];
    }

}
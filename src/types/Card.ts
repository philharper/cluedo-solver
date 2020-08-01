import { Decision } from "./Decision";

export class Card {

    readonly name: string;
    decision: Decision;

    constructor(name: string) {
        this.name = name;
        this.decision = Decision.NONE;
    }

}
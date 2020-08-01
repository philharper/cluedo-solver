import React from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core"
import { Game } from "./types/Game"
import { Decision } from "./types/Decision";
import YesIcon from '@material-ui/icons/Check';
import NoIcon from '@material-ui/icons/Clear';
import MaybeIcon from '@material-ui/icons/Help';
import NoneIcon from '@material-ui/icons/Minimize';
import Player from './types/Player';
import { Card } from './types/Card';

interface DecetectiveGridProps {
    game: Game;
    setCurrentPlayer: (player: Player) => void;
}

export function DetectiveGrid(props: DecetectiveGridProps) {

    const game = props.game;

    function getIcon(decision: Decision) {
        if (decision === Decision.YES) 
        return <YesIcon />
        if (decision === Decision.NO)
        return <NoIcon />
        if (decision === Decision.MAYBE)
        return <MaybeIcon />
        if (decision === Decision.NONE)
        return <NoneIcon />
    }

    function tableRow(game: Game, cards: string[], playerCards: Card[]) {
        return (
            <>
                {cards.map(cardName => {
                    return <TableRow key={cardName}>
                    <TableCell>{cardName}</TableCell>
                    {game.players.map(player => {
                        return <TableCell key={player.name + cardName}>{getIcon(playerCards.filter(playerRoom => {return playerRoom.name === cardName})[0].decision)}</TableCell>
                    })}
                    </TableRow>
                })}
            </>
        )
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table size="small">
                <TableHead>
                    <TableRow>
                    <TableCell>Card</TableCell>
                    {game.players.map((player) => {
                        if (game.currentPlayer === player)
                            return <TableCell key={player.name} style={{color: 'red'}}>{player.name}</TableCell>
                        
                        return <TableCell onClick={() => {props.setCurrentPlayer(player)}} key={player.name}>{player.name}</TableCell>
                    })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Game.ROOMS.map(room => {
                        return <TableRow key={room}>
                        <TableCell>{room}</TableCell>
                        {game.players.map(player => {
                            return <TableCell key={player.name + room}>{getIcon(player.rooms.filter(playerRoom => {return playerRoom.name === room})[0].decision)}</TableCell>
                        })}
                        </TableRow>
                    })}
                    {Game.CHARACTERS.map(character => {
                        return <TableRow key={character}>
                        <TableCell>{character}</TableCell>
                        {game.players.map(player => {
                            return <TableCell key={player.name + character}>{getIcon(player.characters.filter(playerCharacter => {return playerCharacter.name === character})[0].decision)}</TableCell>
                        })}
                        </TableRow>
                    })}
                    {Game.WEAPONS.map(weapon => {
                        return <TableRow key={weapon}>
                        <TableCell>{weapon}</TableCell>
                        {game.players.map(player => {
                            return <TableCell key={player.name + weapon}>{getIcon(player.weapons.filter(playerWeapon => {return playerWeapon.name === weapon})[0].decision)}</TableCell>
                        })}
                        </TableRow>
                    })}
                </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}


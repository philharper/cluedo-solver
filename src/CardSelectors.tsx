import React, { ChangeEvent } from 'react';
import { FormControl, InputLabel, Select, MenuItem, makeStyles, Button } from '@material-ui/core';
import { Game } from './types/Game';
import { Selection } from './types/Selection';
import { Decision } from './types/Decision';

interface CardSelectorsProps {
    selection: Selection;
    updateSelection: (event: any) => void;
    onChoice: (decision: Decision) => void;
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export function CardSelectors(props: CardSelectorsProps) {
    const classes = useStyles();

    return (
        <>
            <FormControl className={classes.formControl}>
                <InputLabel>Character</InputLabel>
                <Select
                    id="character-select"
                    value={props.selection.character}
                    onChange={props.updateSelection}
                    name="character"
                >
                    {Game.CHARACTERS.map((character) => {
                        return <MenuItem key={character} value={character}>{character}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Room</InputLabel>
                <Select
                    id="room-select"
                    value={props.selection.room}
                    onChange={props.updateSelection}
                    name="room"
                >
                    {Game.ROOMS.map((room) => {
                        return <MenuItem key={room} value={room}>{room}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Weapon</InputLabel>
                <Select
                    id="weapon-select"
                    value={props.selection.weapon}
                    onChange={props.updateSelection}
                    name="weapon"
                >
                    {Game.WEAPONS.map((weapon) => {
                        return <MenuItem key={weapon} value={weapon}>{weapon}</MenuItem>
                    })}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <Button variant="contained" color="primary" onClick={() => props.onChoice(Decision.YES)}>Yes</Button>
                <Button variant="contained" color="primary" onClick={() => props.onChoice(Decision.NO)}>No</Button>
                <Button variant="contained" color="primary" onClick={() => props.onChoice(Decision.MAYBE)}>Maybe</Button>
            </FormControl>
        </>
    )
}
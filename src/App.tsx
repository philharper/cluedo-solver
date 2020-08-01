import React, { useState } from 'react';
import './App.css';
import Player from './types/Player';
import { Game } from './types/Game';
import { DetectiveGrid } from './DetectiveGrid';
import { CardSelectors } from './CardSelectors';
import { Selection } from './types/Selection';
import { Decision } from './types/Decision';

function App() {

  const [game, setGame] = React.useState<Game>(new Game([new Player('Phil'), new Player('Kay')]));
  const [selection, setSelection] = useState(new Selection());

  const updateSelection = (event: any) => {
      if (event.target.name === 'character') {
        setSelection({character: event.target.value, room: selection.room, weapon: selection.weapon});
      } else if (event.target.name === 'room') {
        setSelection({character: selection.character, room: event.target.value, weapon: selection.weapon});
      } else if (event.target.name === 'weapon') {
        setSelection({character: selection.character, room: selection.room, weapon: event.target.value});
      }
  }

  const updatePlayerCards = (decision: Decision) => {
    let currentGame = Object.assign({}, game);

    currentGame.currentPlayer.characters.forEach((character) => {
      if (character.name === selection.character)
        character.decision = decision;
    });
    currentGame.currentPlayer.rooms.forEach((room) => {
      if (room.name === selection.room)
        room.decision = decision;
    });
    currentGame.currentPlayer.weapons.forEach((weapon) => {
      if (weapon.name === selection.weapon)
        weapon.decision = decision;
    })

    setGame(currentGame);
  }

  const setCurrentPlayer = (player: Player) => {
    let currentGame = Object.assign({}, game);

    currentGame.currentPlayer = player;

    setGame(currentGame);
  }

  return (
    <>

      <CardSelectors 
        selection={selection} 
        updateSelection={updateSelection}
        onChoice={updatePlayerCards} 
      />
      <DetectiveGrid 
        game={game} 
        setCurrentPlayer={setCurrentPlayer}
        />
    </>
  );
}

export default App;

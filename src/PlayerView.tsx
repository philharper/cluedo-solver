import React from "react";
import Player from "./types/Player";
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel, FormGroup, TableContainer, Paper, Table, TableRow, TableCell, TableHead } from "@material-ui/core";
import { Decision } from "./types/Decision";

class PlayerProps {
    player!: Player;
}


function PlayerView(props: PlayerProps) {

    const player = props.player;
    console.log(player);

    return(
        <>  
            <div style={{margin: '10px', float: "left"}}>
                <TableContainer component={Paper}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Calories</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </div>
        </>
    )

}

export default PlayerView;
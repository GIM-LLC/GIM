/* eslint-disable indent */
import React, { useState, useContext, useEffect } from 'react';
import style from './ghost.css';
import { SocketContext } from '../context/SocketProvider';
import { GameStateContext } from '../context/GameStateProvider';

function Ghostie() {
    const socket = useContext(SocketContext);
    const { incrementPoints } = useContext(GameStateContext);
    const [position, setPosition] = useState(1);
    const [ghostDisable, setGhostDisable] = useState(false);

    const ghostClick = () => {
        if (ghostDisable) {
            setGhostDisable(true);
        } else if (position === 4) {
            incrementPoints(3);
            socket.emit('ghost points');
            setGhostDisable(true);
        } else {
            socket.emit('ghost click', position + 1);
            setPosition((prev) => prev + 1);
        }
    };

    useEffect(() => {
        socket.on('socket ghost click', (newPosition) => {
            setPosition(newPosition);
        });
        socket.on('socket ghost points', () => {
            incrementPoints(3);
        });
    }, [socket]);

    return (
        <p
            onClick={ghostClick}
            disabled={ghostDisable}>
            <img
                className={position === 2 ? [style.ghost, style.positionTwo].join(' ') :
                    (position === 3 ? [style.ghost, style.positionThree].join(' ') :
                        (position === 4 ? [style.ghost, style.positionFour].join(' ') : [style.ghost, style.positionOne].join(' ')))}
                src='/assets/yellow-ghostie.png'
                alt='ghostie' />
        </p>
    );
}

export default Ghostie;

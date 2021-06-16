/* eslint-disable indent */
import { useState, useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketProvider';
import { GameStateContext } from '../context/GameStateProvider';

const useTransparent = () => {
    const socket = useContext(SocketContext);
    const { incrementPoints } = useContext(GameStateContext);
    const [transparentClicked, setTransparentClicked] = useState(false);
    const [transparentPts, setTransparentPts] = useState(false);

    const blinkMessage = () => {
        setTransparentClicked(true);
        setTimeout(() => setTransparentClicked(false), 3000);
    };

    const showMessage = () => {
        blinkMessage();
        socket.emit('transparent click');

        if (!transparentPts) {
            incrementPoints(2);
            setTransparentPts(true);
            socket.emit('transparent points');
        }
    };

    const handleSocketTransparentChange = () => {
        blinkMessage();
    };

    const handleSocketTransparentPoints = () => {
        incrementPoints(2);
        setTransparentPts(true);
    };

    useEffect(() => {
        socket.on('socket transparent click', handleSocketTransparentChange);
        socket.on('socket transparent points', handleSocketTransparentPoints);
    }, [socket]);

    return { showMessage, transparentClicked };
};

export default useTransparent;

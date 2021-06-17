/* eslint-disable indent */
import { useState, useContext, useEffect } from 'react';
import { SocketContext } from '../context/SocketProvider';

const useDuck = () => {
    const socket = useContext(SocketContext);
    const [duck, setDuck] = useState(false);

    const blinkDuck = () => {
        setDuck(true);
        setTimeout(() => setDuck(false), 3000);
    };

    const showDuck = () => {
        blinkDuck();
        socket.emit('duck');
    };


    const handleSocketDuck = () => {
        blinkDuck();
    };

    useEffect(() => {
        socket.on('duck input', handleSocketDuck);
    }, [socket]);

    return { duck, showDuck };
};

export default useDuck;

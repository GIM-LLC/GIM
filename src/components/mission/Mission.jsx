import React, { useState, useEffect, useContext } from 'react';
import style from './Mission.css';
import { SocketContext } from '../../context/SocketProvider';

const Mission = () => {
  const socket = useContext(SocketContext);
  const [hover, setHover] = useState(false);

  const missionHover = () => {
    setHover(true);
    socket.emit('missionHover', true);
  };

  const missionUnHover = () => {
    setHover(false);
    socket.emit('missionHover', false);
  };

  useEffect(() => {
    socket.on('socket mission hover', (newHoverState) => {
      setHover(newHoverState);
    }, [socket]);
  });

  return (
    <section className={style.mission}>
      <p className={style.missionHeader}>Core Values</p>
      <div className={style.missionBody} onMouseEnter={missionHover} onMouseLeave={missionUnHover}>
        <p>
          Her<span className={hover ? style.highlight : ''}>e</span> at General Industrial Manufacturing, we believe in providing the best quality service and products to our loyal customer base. We strive to create economic growth through infrastructure and energy development, and to provide <span className={hover ? style.highlight : ''}>s</span>olutions that support communities and protect the planet. Our goal is to provide the highest level of service, the broadest selection of produ<span className={hover ? style.highlight : ''}>c</span>ts and the most competitive prices.
        </p>
        <p>
          The strength of our team does not only lie in our combined experience and expertise but our <span className={hover ? style.highlight : ''}>a</span>bility to trust each other, <em>no matter what the circumstances</em>. We know that our best work is not produced by individuals but by enjoying collaboration as a team and su<span className={hover ? style.highlight : ''}>p</span>porting each other. This team mentality also extends throughout every day as we work collaboratively with each other to m<span className={hover ? style.highlight : ''}>e</span>et our goals.
        </p>
      </div>
    </section>
  );
};

export default Mission;

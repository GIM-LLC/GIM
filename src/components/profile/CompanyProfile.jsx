import React, { useState, useContext, useEffect } from 'react';
import style from './CompanyProfile.css';
import { SocketContext } from '../../context/SocketProvider';
import { GameStateContext } from '../../context/GameStateProvider';

const CompanyProfile = () => {
  const socket = useContext(SocketContext);
  const { points, incrementPoints } = useContext(GameStateContext);

  const [showGhostStory, setShowGhostStory] = useState(false);
  const [ghostStoryCounted, setGhostStoryCounted] = useState(false);

  const handleGhostStoryPoint = points => {
    incrementPoints(points);
    setGhostStoryCounted(true);
  };

  const handleGhostStoryFlip = () => {
    setShowGhostStory(prev => !prev);
  };

  const handleStoryClick = () => {
    setShowGhostStory(prev => !prev);
    if(!ghostStoryCounted) {
      incrementPoints(1);
      setGhostStoryCounted(true);
    }
    socket.emit('ghostStoryFlip');
    socket.emit('ghostStoryPoint', 1);
  };

  useEffect(() => {
    socket.on('ghostStoryFlip', handleGhostStoryFlip);
    socket.on('socketGhostStoryPoint', handleGhostStoryPoint);

    return () => {
      socket.off('ghostStoryFlip', handleGhostStoryFlip);
      socket.off('socketGhostStoryPoint', handleGhostStoryPoint);
    };
  }, [socket]);

  console.log(points);
  
  return (
    <section className={style.companyProfile}>
      
      <article className={style.story}>
        <figure>
          <img src="http://placekitten.com/200/200" alt="gim image" />
        </figure>
        {showGhostStory
          ? <article onClick={handleStoryClick}>
            <h2>The Ghost Story</h2>
            <p>
              This is some text about a ghost. There will be some information here. Later. But right now it is just here to fill the space.
            </p>
          </article>
          : <article onClick={handleStoryClick}>
            <h2>The GIM Story</h2>
            <p>
            General Industrial Manufacturing Company is a three-generation, family-owned and operated, precision machining supplier. GIM has earned a reputation as a supplier of high quality, low cost precision parts with on-time deliveries. We are a top quality team of employees who work well together.
            </p>
          </article>
        }
      </article>

      <section className={style.news}>
        <h3>Company News</h3>
        <article>
          <h6>Manufacturing Leadership Award Winner 2021 - 06/04/21</h6>
          <p>
            This marks the 3rd time GIM has accepted this award since our start in 1962.
          </p>
        </article>
        <article>
          <h6>Company Expansion Plan Revealed - 05/22/21</h6>
          <p>
            Plans to expand company reach and hire 100 new employees to start in 2022.
          </p>
        </article>
        <article>
          <h6>Employee Memorial Fundraiser - 04/01/21</h6>
          <p>
            With the unexpected passing of one of our long time employees, <span className={style.name}>Robin Smith</span>, HR has organized a fundraiser to help the family of our late team member.
          </p>
        </article>
      </section>
    </section>
  );
};

export default CompanyProfile;

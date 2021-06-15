import { useState, useEffect, useContext } from 'react';
import { GameStateContext } from '../context/GameStateProvider';
import popupContent from '../components/popup/ghostDialogue';

const useGhostPopup = () => {
  const {
    pointFive, 
    pointTen, 
    pointFifteen, 
    original 
  } = popupContent;

  const { points } = useContext(GameStateContext);
  
  const [eventsTriggered, setEventsTriggered] = useState({
    pointFive: false,
    pointTen: false,
    pointFifteen: false
  });
  const [popup, setPopup] = useState(original);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    // when points change, check to see if value meets the required thresholds

    if(!eventsTriggered.pointFive && points >= 5 && points < 10) {
      setPopup(pointFive);
      setEventsTriggered(prev => ({ ...prev, pointFive: true }));
    }

    else if(!eventsTriggered.pointTen && points >= 10 && points < 15) {
      setPopup(pointTen);
      setEventsTriggered(prev => ({ ...prev, pointTen: true }));
    }

    else if(!eventsTriggered.pointFifteen && points >= 15) {
      setPopup(pointFifteen);
      setEventsTriggered(prev => ({ ...prev, pointFifteen: true }));
    }

    // at all other point values, turn off ghost event
    else setPopup(original);

  }, [points]);

  return { popup, slideIndex };
};

export default useGhostPopup;

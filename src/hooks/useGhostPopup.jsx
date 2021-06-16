import { useState, useEffect } from 'react';
import popupContent from '../components/popup/ghostDialogue';

const useGhostPopup = (setPopupActive) => {
  const {
    pointFive, 
    pointTen, 
    pointFifteen, 
    original 
  } = popupContent;

  const [popup, setPopup] = useState(original);
  const [slideIndex, setSlideIndex] = useState(0);
  const [canClose, setCanClose] = useState(true);
  const [eventsTriggered, setEventsTriggered] = useState({
    pointFive: false,
    pointTen: false,
    pointFifteen: false
  });

  const handlePointsUpdate = points => {
    // when points change, check to see if value meets the required thresholds

    if(!eventsTriggered.pointFive && points >= 5 && points < 10) {
      setSlideIndex(0);
      setPopup(pointFive);
      setPopupActive(true);
      setEventsTriggered(prev => ({ ...prev, pointFive: true }));
  
    }

    else if(!eventsTriggered.pointTen && points >= 10 && points < 15) {
      setSlideIndex(0);
      setPopup(pointTen);
      setPopupActive(true);
      setEventsTriggered(prev => ({ ...prev, pointTen: true }));
    }

    else if(!eventsTriggered.pointFifteen && points >= 15) {
      setSlideIndex(0);
      setPopup(pointFifteen);
      setPopupActive(true);
      setEventsTriggered(prev => ({ ...prev, pointFifteen: true }));
    }

    // at all other point values, turn off ghost event
    else setPopup(original);

  };

  const getNextSlide = () => {
    setSlideIndex(prev => prev + 1);
  };

  useEffect(() => {
    slideIndex >= (popup.largeText.length - 1)
      ? setCanClose(true)
      : setCanClose(false);
  }, [popup, slideIndex]);

  const justATest = () => {
    setPopup(pointFifteen);
  };

  return { 
    popup, 
    slideIndex, 
    canClose,
    getNextSlide,
    handlePointsUpdate,
    justATest };
};

export default useGhostPopup;

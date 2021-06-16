import { useState } from 'react';

const usePopupTrigger = () => {
  const [popupActive, setPopupActive] = useState(false);

  return { popupActive, setPopupActive };
};

export default usePopupTrigger;

import React from 'react';

const popupContent = {
  original: {
    largeText: ['Join our newsletter to receive the latest updates and promotions.'],
    smallText: ['First time customers get 10% off the first order now!'],
    inputPlaceholder: ['example@email.com'],
    buttonText: ['Subscribe']
  },

  pointFive: {
    largeText: [
      'Hello?', 
      'I can almost remember...', 
      'I think I\'m trapped.'
    ],
    smallText: [
      'I don\'t know what you\'re doing, but keep doing it.',
      'but something\'s... wrong...', 
      'What happened to me?'
    ],
    inputPlaceholder: [
      '...', 
      '...', 
      '... you died.'
    ],
    buttonText: [
      <i key="0" className="fas fa-angle-double-right"></i>, 
      <i key="1" className="fas fa-angle-double-right"></i>, 
      'I\'m sorry...'
    ]
  },

  pointTen: {
    largeText: [
      'I don\'t know where I am',
      'I can\'t be dead though. It doesn\'t make sense.'
    ],
    smallText: [
      'but whatever you\'re doing, it\'s helping. You can get me out, can\'t you?',
      'I mean, I\'m here, right?'
    ],
    inputPlaceholder: [
      'oh, um...',
      'uh...'
    ],
    buttonText: [
      <i key="0" className="fas fa-angle-double-right"></i>,
      <i key="0" className="fas fa-angle-double-right"></i>
    ]
  },

  pointFifteen: {
    largeText: [
      '...',
      'Thank you.',
      'I don\'t know what\'s next,'
    ],
    smallText: [
      'So that\'s it then.',
      '',
      'but I think I can leave.'
    ],
    inputPlaceholder: [
      'I guess so.',
      'it was nothing...',
      'safe travels, friend.'
    ],
    buttonText: [
      <i key="0" className="fas fa-angle-double-right"></i>,
      <i key="0" className="fas fa-angle-double-right"></i>,
      <i key="0" className="fas fa-angle-double-right"></i>
    ]
  }
};

export default popupContent;

import React from 'react';
const nextSlide = () => {
  // advance the array index for all the dialogue properties
};

const closePopup = () => {
  // close the popup
};

const popupContent = {
  original: {
    largeText: 'Join our newsletter to receive the latest updates and promotions.',
    smallText: 'First time customers get 10% off the first order now!',
    inputPlaceHolder: 'example@email.com',
    buttonText: 'Subscribe',
    buttonFunction: '',
    canClose: true
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
    ],

    buttonFunction: [
      nextSlide, 
      nextSlide, 
      closePopup
    ],

    canClose: [
      false, 
      false, 
      true
    ]
  },

  pointTen: {
    largeText: [''],
    smallText: [''],
    inputPlaceholder: [''],
    buttonText: ['']
  },

  pointFifteen: {
    largeText: [''],
    smallText: [''],
    inputPlaceholder: [''],
    buttonText: ['']
  }

};

export default popupContent;

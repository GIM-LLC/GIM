const nextSlide = () => {
  // advance the array index for all the dialogue properties
};

const closePopup = () => {
  // close the popup
};

const ghostDialogue = {

  pointFive: {

    largeText: [
      'Hello?', 
      'I can almost remember...', 
      'I\'m... trapped.'
    ],

    smallText: [
      'Whatever you\'re doing, keep doing it.',
      'but something\'s... wrong...', 
      'What happened to me?'
    ],

    inputPlaceholder: [
      '...', 
      '...', 
      '...you died.'
    ],

    buttonText: [
      '>', 
      '>', 
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

export default ghostDialogue;

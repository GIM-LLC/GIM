import React from 'react';

const CaptionedImage = () => {
  return (
    <div>
      <figure>
        <img src="http://placekitten.com/200/200" alt="kitten" />
      </figure>
      <figcaption>This is important to business</figcaption>
    </div>
  );
};

export default CaptionedImage;

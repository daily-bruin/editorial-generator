// :: imageHandler.js
/*
    Does as it is named - handles loading and rendering of an image,
    basically getting metadata and handing it off to stateManager.
*/
// ::

const stateManager = require('./stateManager');

const calculateSourceCoordinates = (width, height, ratio) => 
{
  let srcWidth = width;
  let srcHeight = height;
  let dx = 0;
  let dy = 0;
  // const realRatio = width / height;

  // if (realRatio < ratio) 
  // {
  //   srcHeight = width / ratio;
  //   dy = (height - srcHeight) / 2;
  // } 
  // else if (realRatio > ratio) 
  // {
  //   srcWidth = height / ratio;
  //   dx = (width - srcWidth) / 2;
  // }

  return {
    width: srcWidth,
    height: srcHeight,
    dx,
    dy
  };
};

const renderImage = (src, imageNumber) => 
{
  const image = new Image();
  image.onload = () => {
    const ratio = 1;
    const srcCoords = calculateSourceCoordinates(image.width, image.height, ratio);
    const imageData = {
      image,
      width: srcCoords.width,
      height: srcCoords.height,
      dx: srcCoords.dx,
      dy: srcCoords.dy
    };

    if (imageNumber === 1) {
      stateManager.setImage1(imageData);
    }
  };
  image.src = src;
};

// const loadImageFromFile = (src, imageNumber) => {

//   const reader = new FileReader();

//   reader.onload = (e) => 
//   {
//     renderImage(e.target.result, imageNumber);
//   };
//   reader.readAsDataURL(src);
// };

module.exports = {
  // loadImageFromFile,
  renderImage
};

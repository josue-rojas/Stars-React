// colors for stars and shooting stars
const starColors = ['255,255,224','255,255,0', '239, 224, 88','255, 255, 255', '239, 237, 237', '188, 188, 188'];
const totalColors = starColors.length;

// function to get random int (no float)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export {starColors, totalColors, getRandomInt};

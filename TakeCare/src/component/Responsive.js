import { Dimensions, PixelRatio } from 'react-native';

let {width, height} = Dimensions.get('window');

///Convert to width wise
//vertically 
const widthToDp = (number) => {
  /// convert Given width to number
  let givenWidth = typeof number === 'number' ? number : parseFloat(number);
  /// return to convert given value into pixel ratio value
  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

///Convert to Height wise
//horizontally
const heightToDp = (number) => {
  /// convert Given Height to number
  //if percentage
  let givenHeight = typeof number === 'number' ? number : parseFloat(number);
  /// return to convert given value into pixel ratio value
  return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

//responsive font size
const ResponsiveFontSize = (number) => {
  /// convert Given Height to number
  let givenNumber = typeof number === 'number' ? number : parseFloat(number);

  // based on iphone 5s's scale
  const scale = width / 320;

  //get new size
  const newSize = givenNumber * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

/*
/// Orientation Changes
const OrientationChanges = ( ref ) =>{
    Dimensions.addEventListener('change', (dimensions)=>{
        
        //Update Dimensions Width, Height 
        width = dimensions.screen.width;
        height = dimensions.screen.height;
        console.log(width, 'orientation changes\n');
        console.log(height,'orientation changes\n');
        // ref.setState(state =>{
        //     orientation : height > width ? 'portrait' : 'landscape',
        //     console.log(orientation,'orientation');
        // })
    });
};

///Remove OrientationChanges
const RemoveOrientationChanges =()=>{
    Dimensions.removeEventListener('change');
};
*/
export {
  widthToDp,
  heightToDp,
//   OrientationChanges,
//   RemoveOrientationChanges,
  ResponsiveFontSize,
};
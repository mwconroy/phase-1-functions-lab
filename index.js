// Code your solution in this file!
const headQuarters = 42

function distanceFromHqInBlocks(number){
    return Math.abs(number-headQuarters)
};

function distanceFromHqInFeet(number){
    return Math.abs(number-headQuarters)*264
};

function distanceTravelledInFeet(start, destination){
    return Math.abs(start-destination)*264
};


function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <400) {
      return (0)
    } else if (distance <=2000) {
      return .02 * (distance - 400);
    } else if (distance <=2500) {
      return (25)
    } else {
      return ('cannot travel that far')
    }
  };
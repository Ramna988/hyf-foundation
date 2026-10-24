const speed = 50;
const destinationDistance = 430;

function calculateTravelTime(currentSpeed, distance) {
  const totalHours = distance / currentSpeed;

  const hours = Math.floor(totalHours);

  const minutes = Math.round((totalHours - hours) * 60);

  return hours + " hours and " + minutes + " minutes";
}

const travelTime = calculateTravelTime(speed, destinationDistance);
console.log(travelTime);

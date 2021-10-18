// A user can enter the number of minutes past 1pm and the app will calculate the angle between the hour and minute hand.

var main = function (input) {
  var angle1pm = 360 / 12;
  var anglePerMinute = (360 / 60) * input;
  var angle = anglePerMinute - angle1pm;
  var myOutputValue = `The angle between the hour and minute hand is ${angle}`;
  return myOutputValue;
};
